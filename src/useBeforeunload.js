import { useEffect, useRef } from "react";

/**
 * @callback BeforeUnloadHandler
 * @param {BeforeUnloadEvent} event
 * @returns {*}
 */

/**
 * React hook that listens to `beforeunload` window event.
 * @function
 * @param {BeforeUnloadHandler | false | null | undefined} handler - Event listener callback:
 *   Called on `beforeunload` window event. It activates a confirmation dialog
 *   when `event.preventDefault()` is called or a truthy value is returned.
 */
export const useBeforeunload = (handler) => {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  const enabled = typeof handler === "function";

  useEffect(() => {
    if (enabled) {
      const listener = (event) => {
        const returnValue = handlerRef.current(event);
        /** @see https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event */
        if (returnValue || typeof returnValue === "string") {
          event.preventDefault();
          event.returnValue = returnValue;
        } else if (event.defaultPrevented) {
          event.returnValue = true;
        }
      };
      window.addEventListener("beforeunload", listener);
      return () => window.removeEventListener("beforeunload", listener);
    }
  }, [enabled]);
};
