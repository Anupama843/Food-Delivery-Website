import React from 'react';
import './LoadingSpinner.css';
import Loading from '../../resources/loading.gif'
const LoadingSpinner = () => (
    <div className='loading-spinner-container'>
        <><img src={Loading} className='loading-spinner' alt="loading" /></>
    </div>
);

export default LoadingSpinner;
