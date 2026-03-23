

interface ModalProps {
  id?: string;
  header?: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ id, header, body, footer, onClose }: ModalProps) {
  return (
    <div id={id || 'Modal'} className="fixed z-10 pt-40 left-0 top-0 w-full h-full overflow-auto bg-green-500">
      <div className="relative bg-white m-auto p-0 border-2 border-red-500 w-150 flex flex-col justify-center items-center">
        <div className="py-4 px-6 bg-green-700 text-white w-full text-center">
          <span
            onClick={onClose}
            className="cursor-pointer float-right text-2xl font-bold rounded-full bg-green-900 w-10 h-10">&times;</span>
          <h2 className="font-bold">{header ? header : "Header"}</h2>
        </div>
        <div className="py-9 px-2 w-full h-40 text-center">
          {
            body ? body : <div>
              <p>This is Our Model Body</p>
            </div>
          }
        </div>
        <div className="py-9 px-2 bg-green-700 text-white w-full font-bold text-center">
          {footer ? footer : <h2>
            Footer</h2>}
        </div>
      </div>
    </div>
  )
}