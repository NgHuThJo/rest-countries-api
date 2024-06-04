import { useEffect, useMemo, useRef } from "react";

function debounce(callback: () => void, delay: number) {
  let timer: number;

  const debouncedCallback = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      callback();
    }, delay);
  };

  return debouncedCallback;
}

export function useDebounce(callback: () => void, delay = 1000) {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current();
    };

    return debounce(func, delay);
  }, [delay]);

  return debouncedCallback;
}
