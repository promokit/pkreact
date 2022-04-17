import MenuItem from '../Menuitem/Menuitem';
import { MenuInterface } from '../../../../model/interfaces';

interface ComponentInterface {
  menuItems: MenuInterface[];
  isRoot?: boolean;
  setSidebarState?: any;
}

const MenuRoot: React.FC<ComponentInterface> = ({
  menuItems,
  isRoot = false,
  setSidebarState
}): JSX.Element => (
  <ul className={isRoot ? 'root-item' : 'parent'}>
    {menuItems.map((item) => (
      <MenuItem key={item.page_identifier} item={item} setSidebarState={setSidebarState} />
    ))}
  </ul>
);

export default MenuRoot;
