
import Tab, { type TabType } from "./tab";

export default function TabItems() {
  function tContent() {
    return <h1>This is content for Tab3</h1>;
  }

  const tabs: TabType[] = [
    {
      label: 'Tab 1',
      content: <div>This is content for Tab1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>This is content for Tab2</div>,
    },
    {
      label: 'Tab 3',
      content: tContent(),
    },
  ];

  function handleChange(currentTabIndex: number) {
    console.log(currentTabIndex);
  }

  return <Tab tabsContent={tabs} onChange={handleChange} />;
}
