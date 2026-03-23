//npm i react-qr-code
//to install qr-Code from react

import { useState } from "react";
import QRCode from "react-qr-code";


export default function QrGenerator() {
  const [qrCode, setQrCode] = useState<string>('');
  const [input, setInput] = useState<string>('')

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput('');
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10">
      <h1 className="text-3xl font-bold">QR Code Generator</h1>
      <div >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 py-1.5 px-1.5 rounded"
          type="text"
          name="Qr-Code"
          placeholder="Enter your value here"
        />
        <button
          onClick={handleGenerateQrCode}
          disabled={input && input.trim() !== '' ? false : true}
          className="bg-black p-2 text-white rounded -ml-1"
        >Generate</button>
      </div>
      <div>
        <QRCode
          id="qr-code-value"
          value={qrCode}
        // size={300}
        // bgColor="white" 
        />
      </div>
    </div>
  )
}
