import React, { useContext, useState, useEffect } from 'react';
import { ContextProvider } from '../Context/ContextWrapper';
import { Col, Row, Spinner } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Movies = () => {
    const { movieDetails, storeInput } = useContext(ContextProvider);

    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(false);

    const listView = movieDetails.Search || [];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = listView.slice(indexOfFirstItem, indexOfLastItem);


    const totalPages = Math.ceil(listView.length / itemsPerPage);


    useEffect(() => {
        if (!movieDetails || !movieDetails.Search || movieDetails.Search.length === 0) {
            setError(true);
        } else {
            setError(false);
        }
        setLoading(false);
    }, [movieDetails]);


    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            {loading ? (

                <div className="text-center my-5">
                    <Spinner animation="border" variant="primary" role="status">
                        <span className="sr-only"></span>
                    </Spinner>
                </div>
            ) : error ? (

                <div className="text-center my-5">
                    <h3 className='t-white'>There are no movies called <span style={{color:"red"}}>{storeInput}</span>  </h3>
                </div>
            ) : (
                <>
                    <Row>
                    
                    <h3 className='t-white mt-5'>Search Result : <span style={{color:"red", textAlign:'left'}}>{storeInput}</span>  </h3>
                        {currentItems.map((listItems) => (
                            <Link to={`/movie-details/${listItems.imdbID}`}>
                        <Col md={4} className="my-4" key={listItems.imdbID}>
                                <div className="movie-card shadow">
                                    <img src={listItems.Poster} alt={listItems.Title} title={listItems.Title} />
                                    <div className="content">
                                        <h6 className="t-white">{listItems.Title}</h6>
                                        <span className="t-white">{listItems.Year}</span>
                                    </div>
                                    <div className="overlay" />
                                </div>
                            </Col>
                    </Link>
                            
                        ))}
                    </Row>


                    <div className="pagination-controls d-flex gap-2 justify-content-end mt-5 align-items-center">
                        <button onClick={handlePrev} disabled={currentPage === 1}>
                            <FaArrowLeft />
                        </button>
                        <span className="mx-2 t-white">Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNext} disabled={currentPage === totalPages}>
                            <FaArrowRight />
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default Movies;
