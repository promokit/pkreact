import MenuItem from '../Menuitem/Menuitem';
import { MenuInterface } from '../../../../model/interfaces';

interface ComponentInterface {
  menuItems: MenuInterface[];
  isRoot?: boolean;
  setSidebarState: Function;
}

const MenuRoot = ({ menuItems, isRoot = false, setSidebarState }: ComponentInterface) => (
  <ul className={isRoot ? 'root-item' : 'parent'}>
    {menuItems.map((item) => (
      <MenuItem key={item.page_identifier} item={item} setSidebarState={setSidebarState} />
    ))}
  </ul>
);

export default MenuRoot;
