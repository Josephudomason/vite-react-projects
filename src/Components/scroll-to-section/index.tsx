import { useRef } from "react";

type DataSections = {
  label: string;
  style: React.CSSProperties;
}



export default function ScrollToSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const data: DataSections[] = [
    {
      label: 'First Card',
      style: {
        width: "100%",
        height: '600px',
        background: 'red',
        color: 'white',
      }
    },
    {
      label: 'Second Card',
      style: {
        width: "100%",
        height: '600px',
        background: 'purple',
        color: 'white',
      }
    },
    {
      label: 'Third Card',
      style: {
        width: "100%",
        height: '600px',
        background: 'black',
        color: 'white',
      }
    },
    {
      label: 'Fourth Card',
      style: {
        width: "100%",
        height: '600px',
        background: 'blue',
        color: 'white',
      }
    },
    {
      label: 'Fifth Card',
      style: {
        width: "100%",
        height: '600px',
        background: 'green',
        color: 'white',
      }
    }
  ]

  function handleScrollToSection() {
    if (!ref.current) {
      return;
    }

    const pos = ref.current.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: pos,
      behavior: "smooth"
    })
  }
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl">Scroll to a particular section</h1>
      <button
        onClick={handleScrollToSection}
      >Click to scroll</button>
      {
        data.map((item, index) => <div key={item.label} ref={index === 3 ? ref : null} style={item.style}>
          <h1>{item.label}</h1>
        </div>)
      }
    </div>
  )
}
