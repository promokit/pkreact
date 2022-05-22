import { MenuInterface } from '../../../../model/interfaces';

import MenuItem from '../MenuItem/MenuItem';

import './styles.scss';

interface ComponentInterface {
  menuItems: MenuInterface[];
  isRoot?: boolean;
  closeSidebar: () => void;
}

const MenuRoot = ({ menuItems, isRoot = false, closeSidebar }: ComponentInterface) => (
  <ul className={isRoot ? 'root-item' : 'parent'}>
    {menuItems.map((item) => (
      <MenuItem key={item.page_identifier} item={item} closeSidebar={closeSidebar} />
    ))}
  </ul>
);

export default MenuRoot;
