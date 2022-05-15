import { useState } from 'react';
import { SidebarStates } from '../../../model/enums';

import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../SvgIcon/SvgIcon';

const FavoriteButton = () => {
  const componentId: string = 'favorite';
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);
  const closeSidebar = () => setSidebarState(SidebarStates.Close);
  const openSidebar = () => setSidebarState(SidebarStates.Open);

  return (
    <>
      <button className={`${componentId} clear-button`} onClick={openSidebar}>
        <SvgIcon href={componentId} />
      </button>
      <Sidebar
        id={componentId}
        sidebarTitle="My Favorites"
        sidebarState={sidebarState}
        closeSidebar={closeSidebar}
      >
        <div className="alert alert-info">Favorite List Here</div>
      </Sidebar>
    </>
  );
};

export default FavoriteButton;
