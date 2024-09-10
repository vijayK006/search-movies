import React, { useContext, useEffect, useState } from 'react'
import logoImg from '../assets/img/logo.png';
import { IoSearch } from 'react-icons/io5';
import { ContextProvider } from '../Context/ContextWrapper';
import { FaTimesCircle } from 'react-icons/fa';
const Navbar = () => {
  const { setStoreInput } = useContext(ContextProvider)
  const [searchinputs, setSearchinputs] = useState('')

  const searchMovies = () => {
    setStoreInput(searchinputs)
    const pop_butttonclose = document.getElementById('pop-buttton-close');
    const pop_buttton = document.getElementById('pop-buttton');
    pop_buttton.style.display = "none";
    pop_butttonclose.style.display = "block";
  }

  const clearSearch = () => {
    const pop_butttonclose = document.getElementById('pop-buttton-close');

    const pop_buttton = document.getElementById('pop-buttton');

    pop_buttton.style.display = "block";
    pop_butttonclose.style.display = "none";
    setStoreInput('abc');
    setSearchinputs('');

  }

  useEffect(() => {
    clearSearch();
  }, [])

  const nav_bar = document.querySelectorAll('.nav_bar')
  window.addEventListener('scroll', () => {
    const scroller = window.scrollY;
    const setpoint = 230;
    if (scroller >= setpoint) {
      nav_bar.forEach((navstrap) => {
        navstrap.classList.add('scrollerset')
      })
    } else {
      nav_bar.forEach((navstrap) => {
        navstrap.classList.remove('scrollerset')
      })
    }

  })

  return (
    <>
      <nav className='d-flex justify-content-between align-items-center nav_bar'>
        <div className="logo">
          <img src={logoImg} alt='logo-moviez' title='logo-moviez' />
        </div>

        <div className='search-wrapper-field'>
          <input type="text" placeholder='Search your movies ...' onChange={(e) => setSearchinputs(e.target.value)} value={searchinputs} />

          <button type='button' id='pop-buttton' onClick={searchMovies}><IoSearch className='icon' /></button>
          <button type='button' id='pop-buttton-close' onClick={clearSearch}><FaTimesCircle className='icon' /></button>
        </div>

      </nav>
    </>
  )
}

export default Navbar
