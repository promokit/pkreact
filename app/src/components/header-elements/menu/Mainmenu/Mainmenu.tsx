import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../providers/store';
import { HeaderInterface } from '../../../../model/interfaces';
import MenuRoot from '../Menuroot/Menuroot';
import SvgIcon from '../../../SvgIcon/SvgIcon';

import './styles.scss';
import Sidebar from '../../../Sidebar/Sidebar';
import { NotificationType, SidebarStates } from '../../../../model/enums';
import Notification from '../../../notifications/Notification/Notification';

interface ComponentInterface {
  header: HeaderInterface;
}

const Mainmenu: React.FC = (): JSX.Element => {
  const componentId: string = 'menu';
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);

  const {
    header: { menuItems }
  } = useSelector<AppState, ComponentInterface>((state) => state.bootstrap);

  return (
    <div className="main-menu w100">
      <div className="page-width">
        <div className="flex menu-menu__bar" onClick={() => setSidebarState(SidebarStates.Open)}>
          <strong className="flex-grow">MENU</strong>
          <SvgIcon href="menu" />
        </div>
        <Sidebar
          id={componentId}
          sidebarTitle="Main Menu"
          sidebarState={sidebarState}
          setSidebarState={setSidebarState}
        >
          {menuItems.length > 0 ? (
            <nav id="menu-nav-root">
              <MenuRoot menuItems={menuItems} isRoot={true} />
            </nav>
          ) : (
            <Notification type={NotificationType.Info} message="No menu items yet" />
          )}
        </Sidebar>
      </div>
    </div>
  );
};

export default Mainmenu;
