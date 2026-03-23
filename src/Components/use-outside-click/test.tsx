import { useRef, useState } from "react"
import useOutSideClick from ".";


export default function UseOnClickOutSideTest() {
  const ref = useRef();
  useOutSideClick(ref, () => setShowContent(false));

  const [showContent, setShowContent] = useState(false);





  return (
    <div>
      {
        showContent ? <div ref={ref}>
          <h1>Random Content</h1>
          <p>Click outside for this to close Content</p>
        </div> :
          <button onClick={() => setShowContent(true)}>Show Content button</button>
      }
    </div>
  )
}
