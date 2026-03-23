import { useState } from "react"
import { data } from "./Data"


export default function Accordian() {
  const [selected, setSelected] = useState<number | null>(0);
  const [enableMultiSelection, setEnableMultiSelection] = useState<boolean>(false);

  const [multiIDSelected, setMultiIDSelected] = useState<number[]>([])

  function handleSingleSelection(getCurrentId: number) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  function handleMultiSelection(getCurrentId: number) {
    let cpyMultiple = [...multiIDSelected];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiIDSelected(cpyMultiple)
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className={`mb-5 mt-3 p-2 font-bold cursor-pointer text-white rounded transition-all duration-300 ${enableMultiSelection
          ? 'bg-amber-500 shadow-lg shadow-amber-500/50 animate-pulse'
          : 'bg-amber-900'
          }`}>Enable Multi Selection</button>

      <div className="max-w-125">
        {data && data.length > 0 ?
          data.map(dataItem => <div className="bg-amber-700 py-5 px-5 mb-5" key={dataItem.id}>
            <div className="text-white flex justify-between items-center cursor-default"
              onClick={enableMultiSelection
                ? () => handleMultiSelection(dataItem.id)
                : () => handleSingleSelection(dataItem.id)}>
              <h3 className="text-center font-bold">{dataItem.question}</h3>
              <span className="cursor-pointer font-bold">
                {selected === dataItem.id || multiIDSelected.indexOf(dataItem.id) !== -1 ? '-' : '+'}
              </span>
            </div>

            {selected === dataItem.id || multiIDSelected.indexOf(dataItem.id) !== -1 ?
              <div className=" mt-5 text-center text-white">{dataItem.answer}</div>
              : null
            }

          </div>)
          : <div>No data found</div>}
      </div>
    </div>
  )
}
