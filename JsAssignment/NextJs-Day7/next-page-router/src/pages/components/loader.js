import React from 'react';

import { useLoader } from '../context/LoaderContext'; 

const Loader = () => {
  const { loading } = useLoader();

  if (!loading) return null; 

  return (
    <div style={loaderStyle}>
      <div>Loading...</div>
    </div>
  );
};

const loaderStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '2em',
};

export default Loader;
