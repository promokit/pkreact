import { useState } from 'react';
import { useSelector } from 'react-redux';
import { menuSelector } from '../../../../providers/header/selector';
import { SidebarStates } from '../../../../model/enums';

import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../../atoms/SvgIcon/SvgIcon';
import MenuSidebarContent from '../MenuSidebarContent/MenuSidebarContent';

import './styles.scss';

const MenuBar = () => {
  const componentId: string = 'menu-bar';
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
          <MenuSidebarContent menu={menu} closeSidebar={closeSidebar} />
        </Sidebar>
      </div>
    </div>
  );
};

export default MenuBar;
