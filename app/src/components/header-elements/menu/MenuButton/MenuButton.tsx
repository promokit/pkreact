import { useState } from 'react';
import { useSelector } from 'react-redux';
import { menuSelector } from '../../../../providers/header/selector';
import { NotificationType, SidebarStates } from '../../../../model/enums';

import MenuRoot from '../Menuroot/Menuroot';
import SvgIcon from '../../../SvgIcon/SvgIcon';
import Sidebar from '../../../Sidebar/Sidebar';
import Notification from '../../../notifications/Notification/Notification';

const MenuButton = () => {
  const componentId: string = 'menu';
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);
  const closeSidebar = () => setSidebarState(SidebarStates.Close);
  const openSidebar = () => setSidebarState(SidebarStates.Open);
  const menu = useSelector(menuSelector);

  return (
    <>
      <button className={`${componentId} clear-button`} onClick={openSidebar}>
        <SvgIcon href={componentId} />
      </button>
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
    </>
  );
};

export default MenuButton;
