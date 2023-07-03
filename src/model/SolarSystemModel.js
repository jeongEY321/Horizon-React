import React, { useRef, useEffect } from 'react';
import Controlls from './Controlls';

const SolarSystemModel = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'SolarSystemScript.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Controlls />
      <canvas ref={canvasRef} id="three-canvas"></canvas>
    </>
  );
}

export default SolarSystemModel;