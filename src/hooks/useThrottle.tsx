import { useEffect, useMemo, useRef } from "react";

export function throttle(callback: () => void, delay: number) {
  let isWaiting = false;
  let lastCallback: (() => void) | null = null;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const timeoutFunc = () => {
    if (!lastCallback) {
      isWaiting = false;
    } else {
      lastCallback();
      lastCallback = null;
      timeoutId = setTimeout(timeoutFunc, delay);
    }
  };

  const throttledCallback = () => {
    if (isWaiting) {
      lastCallback = callback;
      return;
    }

    callback();
    isWaiting = true;
    timeoutId = setTimeout(timeoutFunc, delay);
  };

  throttledCallback.clear = () => {
    clearTimeout(timeoutId);
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

  useEffect(() => {
    return () => {
      throttledCallback.clear();
    };
  }, [throttledCallback]);

  return throttledCallback;
}
