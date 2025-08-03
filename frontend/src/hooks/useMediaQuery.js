import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../utils/constants';

/**
 * Custom hook for handling media queries
 * @param {string} query - The media query to match
 * @returns {boolean} Whether the media query matches
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Set initial value
    setMatches(mediaQuery.matches);
    
    // Create event listener
    const handler = (event) => setMatches(event.matches);
    
    // Add event listener with compatibility for older browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
    } else {
      mediaQuery.addListener(handler);
    }
    
    // Clean up
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, [query]);

  return matches;
};

/**
 * Predefined media query hooks for common breakpoints
 */
export const useIsMobile = () => {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.sm - 1}px)`);
};

export const useIsTablet = () => {
  return useMediaQuery(
    `(min-width: ${BREAKPOINTS.sm}px) and (max-width: ${BREAKPOINTS.md - 1}px)`
  );
};

export const useIsDesktop = () => {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`);
};

export const useIsLargeDesktop = () => {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
};

export const useIsExtraLargeDesktop = () => {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.xl}px)`);
};

/**
 * Hook for checking if the screen is in portrait orientation
 * @returns {boolean} Whether the screen is in portrait orientation
 */
export const useIsPortrait = () => {
  return useMediaQuery('(orientation: portrait)');
};

/**
 * Hook for checking if the screen is in landscape orientation
 * @returns {boolean} Whether the screen is in landscape orientation
 */
export const useIsLandscape = () => {
  return useMediaQuery('(orientation: landscape)');
};

/**
 * Hook for checking if the user prefers reduced motion
 * @returns {boolean} Whether the user prefers reduced motion
 */
export const usePrefersReducedMotion = () => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

/**
 * Hook for checking if the user prefers dark color scheme
 * @returns {boolean} Whether the user prefers dark color scheme
 */
export const usePrefersDarkMode = () => {
  return useMediaQuery('(prefers-color-scheme: dark)');
};

export default useMediaQuery;