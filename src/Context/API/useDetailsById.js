import axios from 'axios';
import React, { useState } from 'react'

const useDetailsById = (odmid) => {
    const [detailsById, setDetailsById] = useState([]);

    axios.get(`http://www.omdbapi.com/?i=${odmid}`)

  return detailsById;
}

export default useDetailsById
