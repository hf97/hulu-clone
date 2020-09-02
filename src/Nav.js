import React from 'react';
import './Nav.css';
import request from './requests.js';

function Nav({ setSelectedOption }) {
  return (
    <div className='nav'>
      <h2 onClick={() => setSelectedOption(request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedOption(request.fetchAction)}>Action</h2>
      <h2 onClick={() => setSelectedOption(request.fetchComedy)}>Comedy</h2>
      <h2 onClick={() => setSelectedOption(request.fetchHorror)}>Horror</h2>
      <h2 onClick={() => setSelectedOption(request.fetchRomance)}>Romance</h2>
      <h2 onClick={() => setSelectedOption(request.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOption(request.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSelectedOption(request.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(request.fetchAnimation)}>Animation</h2>
      <h2 onClick={() => setSelectedOption(request.fetchTV)}>TV Movie</h2>
    </div>
  )
}

export default Nav
