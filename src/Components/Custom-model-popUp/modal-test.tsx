import { useState } from "react"
import Modal from "./modal";


export default function ModalTest() {
  const [showModelPopup, setShowModelPopup] = useState<boolean>(false);

  function handleToggleModalPopup() {
    setShowModelPopup(!showModelPopup);
  }

  function onClose() {
    setShowModelPopup(false);
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <button
        onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {
        showModelPopup && <Modal onClose={onClose} body={<div>Customized Body</div>} />
      }
    </div>
  )
}
