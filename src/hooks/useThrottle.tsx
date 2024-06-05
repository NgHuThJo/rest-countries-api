import { useEffect, useMemo, useRef } from "react";

export function throttle(callback: () => void, delay: number) {
  let isWaiting = false;
  let lastCallback: (() => void) | null = null;

  const timeoutFunc = () => {
    if (!lastCallback) {
      isWaiting = false;
    } else {
      lastCallback();
      lastCallback = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  const throttledCallback = () => {
    if (isWaiting) {
      lastCallback = callback;
      return;
    }

    callback();
    isWaiting = true;
    setTimeout(timeoutFunc, delay);
  };

  return throttledCallback;
}

export function useThrottle(callback: () => void, delay = 1000) {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const throttledCallback = useMemo(() => {
    const func = () => {
      ref.current();
    };

    return throttle(func, delay);
  }, [delay]);

  return throttledCallback;
}
