import MenuItem from '../Menuitem/Menuitem';
import { MenuInterface } from '../../../../model/interfaces';

interface ComponentInterface {
  menuItems: MenuInterface[];
  isRoot?: boolean;
}

const MenuRoot: React.FC<ComponentInterface> = ({ menuItems, isRoot = false }): JSX.Element => (
  <ul className={isRoot ? 'root-item' : 'parent'}>
    {menuItems.map((item) => (
      <MenuItem key={item.id.toString() + item.type} item={item} />
    ))}
  </ul>
);

export default MenuRoot;
