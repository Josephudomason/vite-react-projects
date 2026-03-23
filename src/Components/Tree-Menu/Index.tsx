import type { MenuItem } from "./Data"
import MenuList from "./menu-list"

interface TreeMenuProps {
  sideMenuData?: MenuItem[];
}

export default function TreeMenu({ sideMenuData }: TreeMenuProps) {
  // const data: MenuItem[] = sideMenuData || []; 

  return (
    <div className="h-screen">
      <MenuList list={sideMenuData} />
    </div>
  )

}
