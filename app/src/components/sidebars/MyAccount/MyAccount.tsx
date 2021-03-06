import { useState } from 'react';
import { SidebarStates } from '../../../model/enums';
import { usePsContext } from '../../../hooks/usePsContext';

import Sidebar from '../Sidebar/Sidebar';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import UserInfo from '../../customer/UserInfo/UserInfo';
import LoginForm from '../../customer/LoginForm/LoginForm';

const MyAccount = () => {
  const componentId: string = 'myaccount';
  const { userContext } = usePsContext();
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
        sidebarTitle="User Area"
        sidebarState={sidebarState}
        closeSidebar={closeSidebar}
      >
        {Number(userContext.id) !== 0 ? <UserInfo /> : <LoginForm />}
      </Sidebar>
    </>
  );
};

export default MyAccount;
