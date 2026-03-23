import { useLayoutEffect, useState } from "react"


export default function useWindowReSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });


  function handleReSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useLayoutEffect(() => {
    handleReSize();

    window.addEventListener('resize', handleReSize);

    return () => {
      window.removeEventListener('resize', handleReSize);
    }
  }, [])

  return windowSize;
}
