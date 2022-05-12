import { useState } from 'react';
import { useSelector } from 'react-redux';
import { menuSelector } from '../../../../providers/header/selector';
import { NotificationType, SidebarStates } from '../../../../model/enums';

import MenuRoot from '../Menuroot/Menuroot';
import SvgIcon from '../../../SvgIcon/SvgIcon';
import Sidebar from '../../../Sidebar/Sidebar';
import Notification from '../../../notifications/Notification/Notification';

import './styles.scss';

const Mainmenu = () => {
  const componentId: string = 'menu';
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);
  const closeSidebar = () => setSidebarState(SidebarStates.Close);
  const menu = useSelector(menuSelector);

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
          closeSidebar={closeSidebar}
        >
          {menu.length > 0 ? (
            <nav id="menu-nav-root">
              <MenuRoot menuItems={menu} isRoot={true} closeSidebar={closeSidebar} />
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
