import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarStates } from '../../../../model/enums';
import { APP_URL } from '../../../../constants/constants';
import { MenuInterface } from '../../../../model/interfaces';

import SvgIcon from '../../../SvgIcon/SvgIcon';
import MenuRoot from '../Menuroot/Menuroot';

import './styles.scss';

interface ComponentInterface {
  item: MenuInterface;
  setSidebarState: (value: SidebarStates) => void;
}

const MenuItem = ({ item: { type, label, children, id }, setSidebarState }: ComponentInterface) => {
  const [menuItemState, setMenuItemState] = useState<boolean>(false);
  const classList =
    children && children.length > 0
      ? 'parent ' + (menuItemState ? 'expanded' : 'collapsed')
      : 'single';

  return (
    <li className={classList}>
      <span className="menu-item__span flex">
        <span className="flex-grow" onClick={() => setSidebarState(SidebarStates.Close)}>
          <Link to={`${APP_URL}/${type}/${id}`}>{label}</Link>
        </span>
        {children && children.length > 0 && (
          <span className="main-menu__trigger" onClick={() => setMenuItemState(!menuItemState)}>
            <SvgIcon href={menuItemState ? 'minus' : 'plus'} />
          </span>
        )}
      </span>
      {children && children.length > 0 && (
        <MenuRoot menuItems={children} setSidebarState={setSidebarState} />
      )}
    </li>
  );
};

export default MenuItem;
