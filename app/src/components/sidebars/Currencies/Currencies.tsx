import { useState } from 'react';
import { SidebarStates } from '../../../model/enums';

import Sidebar from '../Sidebar/Sidebar';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import CurrenciesList from '../../atoms/CurrenciesList/CurrenciesList';

import './styles.scss';

const CurrenciesButton = () => {
  const componentId: string = 'currencies';
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
        sidebarTitle="Currencies"
        sidebarState={sidebarState}
        closeSidebar={closeSidebar}
      >
        <CurrenciesList />
      </Sidebar>
    </>
  );
};

export default CurrenciesButton;
