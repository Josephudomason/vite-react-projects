import useWindowReSize from "."


export default function UseWindowReSizeTest() {

  const windowSize = useWindowReSize();
  const { width, height } = windowSize;

  return (
    <div>
      <h1>
        Use Window ReSize Hook
      </h1>
      <p>width is {width}</p>
      <p>height is {height}</p>
    </div>
  )
}
