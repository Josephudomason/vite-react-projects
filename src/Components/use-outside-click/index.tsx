import { useEffect, type RefObject } from "react"

export default function useOutSideClick<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
) {
  useEffect(() => {
    function listener(event: MouseEvent | TouchEvent) {
      const element = ref.current;

      if (!element || !(event.target instanceof Node) || element.contains(event.target)) {
        return;
      }

      handler(event);
    }

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, ref]);
}
