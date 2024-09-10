import React from 'react';
import bannerImg from '../assets/img/banner.avif';
import { FaGooglePlay } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import Navbar from '../Layouts/Navbar';
import { Container } from 'react-bootstrap';
import Movies from '../Components/Movies';

const Home = () => {

  return (
    <>
      <Navbar />


      <div className="banner">
        <img src={bannerImg} alt="monster.inc" title='monster.inc' />
        <div className='content'>
          <h1>Monster, Inc.</h1>
          <p className='m-0'>In a world inhabited by monsters, the city of Monstropolis harnesses the screams of human children for energy. At the Monsters, Incorporated factory, skilled monsters employed as "scarers" venture into the human world to scare readmore ...</p>

          <div className='d-flex gap-4 mt-4'>
            <button type="button" className=' banner-btn'>Watch Now <FaGooglePlay /></button>

            <button type="button" className='banner-btn-outline'>More Details <MdArrowForwardIos /></button>
          </div>
        </div>
      </div>


      <Container className='py-5'>
        <div className='section-content'>
          <h2 className='heading m-0'>Find Your Next Favorite Movie!</h2>
          <p>Welcome to our movie search platform, where finding detailed information about your favorite films is just a click away! Simply type the name of any movie in the search input box, and instantly access all the details you need—from the release date, cast, and crew to ratings and reviews.</p>
        </div>




        <Movies />

      </Container>
    </>
  )
}

export default Home
