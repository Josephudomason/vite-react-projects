

import { useState } from 'react';
import type { MenuItem as MenuItemType } from './Data';
import MenuList from './menu-list';
import { FaMinus, FaPlus } from 'react-icons/fa';


interface MenuItemProps {
  item: MenuItemType;
}



export default function MenuItem({ item }: MenuItemProps) {

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<Record<string, boolean>>({})

  function handleToggleChildren(getCurrentLabel: string) {
    setDisplayCurrentChildren(
      {
        ...displayCurrentChildren,
        [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
      }
    )
  }

  return (
    <li>
      <div className='flex gap-5 bg-blue-500 items-center w-50 p-2 cursor-pointer'>
        <p className='text-white'>{item.label}</p>
        {
          item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>
            {
              displayCurrentChildren[item.label] ? <FaMinus color='white' size={10} /> : <FaPlus color='white' size={10} />
            }
          </span>
            : null
        }
      </div>
      {
        item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? <MenuList list={item.children} /> : null
      }
    </li>
  )
}
