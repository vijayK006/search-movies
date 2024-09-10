import axios from 'axios';
import { useEffect, useState } from 'react';

const useDetails = (movietitle) => {
  console.log(movietitle);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${movietitle}&apikey=9f779cb3`)
      .then((res) => {
        let responseData = res.data;
        setSearchResult(responseData);
      })
  }, [movietitle])
  return searchResult;
}

export default useDetails
