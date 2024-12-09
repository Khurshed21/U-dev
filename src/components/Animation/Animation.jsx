import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const VantaHalo = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      const HALO = (await import('vanta/dist/vanta.halo.min')).default;
      if (!vantaEffect.current) {
        vantaEffect.current = HALO({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          yOffset: 0.10
        });
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ width: '100%', height: '800px', position: 'fixed', zIndex: '-1',  }} />;
};

export default VantaHalo;
