import { useState } from "react"


export default function ColorIndex() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#A3A3A3');

  function randomColorUtility(length: number) {
    return Math.floor(Math.random() * length)
  }

  function handleRandomHexColor() {
    const hex: (string | number)[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  function handleColorTypeChange(nextType: 'hex' | 'rgb') {
    setTypeOfColor(nextType);

    if (nextType === 'rgb') {
      handleRandomRgbColor();
      return;
    }

    handleRandomHexColor();
  }

  return (
    <div className="flex flex-col min-h-screen justify-center" style={{ backgroundColor: color }}>

      <div className="space-x-4 flex justify-center sm:mx-5 sm:my-5">
        <button
          onClick={() => handleColorTypeChange('rgb')}
          className="bg-white py-2 px-1 shadow hover:shadow-lg  rounded hover:bg-gray-400 hover:text-white">
          Create RGB Color
        </button>

        <button
          onClick={() => handleColorTypeChange('hex')}
          className="bg-white py-2 px-1 shadow hover:shadow-lg  rounded hover:bg-gray-400 hover:text-white">
          Create HEX Color
        </button>

        <button
          onClick={typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor}
          className="bg-white py-2 px-1 shadow rounded hover:shadow-lg hover:bg-gray-400 hover:text-white outline-0">
          Generate Random Color
        </button>
      </div>

      <div className="block text-center text-white text-3xl mt-50">
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div >
  )
}
