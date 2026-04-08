import { useRef, useState } from "react"
import useOutSideClick from ".";


export default function UseOnClickOutSideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOutSideClick(ref, () => setShowContent(false));

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
