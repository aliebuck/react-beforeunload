import { useEffect, useRef } from 'react';

/**
 * React hook that listens to `beforeunload` window event.
 * @function
 * @param {?function} handler - Event listener
 *   called on `beforeunload` window event. It activates a confirmation dialog
 *   when `event.preventDefault()` is called or a string is returned.
 */
export const useBeforeunload = (handler) => {
  const enabled = typeof handler === 'function';

  // Persist handler in ref
  const handlerRef = useRef(handler);
  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (enabled) {
      const listener = (event) => {
        const returnValue = handlerRef.current(event);
        /** @see https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event#compatibility_notes */
        if (returnValue || typeof returnValue === 'string') {
          event.preventDefault();
          return (event.returnValue = returnValue);
        }
        if (event.defaultPrevented) {
          return (event.returnValue = true);
        }
      };

      window.addEventListener('beforeunload', listener);
      return () => {
        window.removeEventListener('beforeunload', listener);
      };
    }
  }, [enabled]);
};
