import { useState } from 'react';
import { SidebarStates } from '../../../model/enums';

import Details from '../../Details/Details';
import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../SvgIcon/SvgIcon';
import CurrenciesList from '../currencies/CurrenciesList/CurrenciesList';
import LanguagesList from '../languages/LanguagesList/LanguagesList';

const Settings = () => {
  const componentId: string = 'settings';
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
        sidebarTitle="Settings"
        sidebarState={sidebarState}
        closeSidebar={closeSidebar}
      >
        <Details title="Languages" content={<LanguagesList />} />
        <Details title="Currencies" content={<CurrenciesList />} />
      </Sidebar>
    </>
  );
};

export default Settings;
