
import React from 'react';
import Review from './Review'
import './Review.css'
import {Link} from 'react-router-dom';
function Reviewtab() {
  return (
    <main>
      <Link to='#' className='container'>
        <div className='title'>
          <h1>Our Reviews</h1>
          <div className='underline'></div>
        </div>
        <Review />
      </Link>
    </main>
  );
}

export default Reviewtab;