import MenuItem from "./menu-item";
import type { MenuItem as MenuItemType } from "./Data";

interface MenuListProps {
  list?: MenuItemType[];
}

export default function MenuList({ list = [] }: MenuListProps) {
  return (
    <ul>
      {
        list && list.length ? list.map((listItem, index) => <MenuItem key={index} item={listItem} />) : null
      }
    </ul>
  )
}
