// Dependencies
import { useState, useEffect } from 'react';
import { Constants } from '../../config/layout';

/**
 * useCheckMobile();
 * @description Define if the client resolution is mobile.
 * @returns {boolean}
 */
export function useCheckMobile() {
  // Constants
  const [width, setWidth] = useState(window.innerWidth);

  // Hook Effect
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Listeners
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  });

  return (width < Constants().sizing.MAX_MOBILE_WIDTH);
}
