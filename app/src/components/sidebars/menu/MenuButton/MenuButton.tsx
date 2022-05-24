import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SidebarStates } from '../../../../model/enums';
import { menuSelector } from '../../../../providers/header/selector';

import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../../atoms/SvgIcon/SvgIcon';
import MenuSidebarContent from '../MenuSidebarContent/MenuSidebarContent';

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
        <MenuSidebarContent menu={menu} closeSidebar={closeSidebar} />
      </Sidebar>
    </>
  );
};

export default MenuButton;
