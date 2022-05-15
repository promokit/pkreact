import { useState } from 'react';
import { SidebarStates } from '../../../../model/enums';

import Sidebar from '../../../Sidebar/Sidebar';
import SvgIcon from '../../../SvgIcon/SvgIcon';
import LanguagesList from '../LanguagesList/LanguagesList';

import './styles.scss';

const LanguagesButton = () => {
  const componentId: string = 'languages';
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
        sidebarTitle="Languages"
        sidebarState={sidebarState}
        closeSidebar={closeSidebar}
      >
        <LanguagesList />
      </Sidebar>
    </>
  );
};

export default LanguagesButton;
