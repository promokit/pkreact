import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuInterface } from '../../../../model/interfaces';
import SvgIcon from '../../../SvgIcon/SvgIcon';
import MenuRoot from '../Menuroot/Menuroot';

import './styles.scss';

interface ComponentInterface {
  item: MenuInterface;
}

const MenuItem: React.FC<ComponentInterface> = ({
  item: { type, label, children, id }
}): JSX.Element => {
  const [menuItemState, setMenuItemState] = useState<boolean>(false);
  return (
    <li className={menuItemState ? 'expanded' : 'collapsed'}>
      <span className="menu-item__span flex">
        <Link to={`${type}/${id}`}>{label}</Link>
        {children.length > 0 && (
          <span className="main-menu__trigger" onClick={() => setMenuItemState(!menuItemState)}>
            <SvgIcon href={menuItemState ? 'minus' : 'plus'} />
          </span>
        )}
      </span>
      {children.length > 0 && <MenuRoot menuItems={children} />}
    </li>
  );
};

export default MenuItem;
