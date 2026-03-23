import { useState } from "react"

export type TabType = {
  label: string;
  content: React.ReactNode;
}

interface TabProps {
  tabsContent: TabType[];
  onChange: (index: number) => void;
}

export default function Tab({ tabsContent, onChange }: TabProps) {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  function handleOnClick(getCurrentIndex: number) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen mt-20">
      <div className="flex justify-center">
        {tabsContent.map((tabItems, index) => (
          <div className={`p-4 ${currentTabIndex === index ? 'bg-purple-100 text-black ' : ' bg-purple-900 text-white'}`} onClick={() => handleOnClick(index)} key={tabItems.label}>
            <span className="font-bold">{tabItems.label}</span>
          </div>
        ))}
      </div>
      <div className="text-3xl text-red-500 mt-10">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
