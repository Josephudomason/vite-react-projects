import { useEffect, useState } from "react"

function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default function useWindowReSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize);


  function handleReSize() {
    setWindowSize(getWindowSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleReSize);

    return () => {
      window.removeEventListener('resize', handleReSize);
    }
  }, [])

  return windowSize;
}
