import React from 'react';
import './Loader.css';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader__spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;