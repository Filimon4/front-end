import { RefObject, useEffect, useRef } from 'react'

type UseOutsideClickHook = (onOutsideClick: () => void) => RefObject<HTMLElement>;

const useClickOutside: UseOutsideClickHook = (callbackOutside) => {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callbackOutside();
      }
    }
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
  })

  return ref;
}

export default useClickOutside
