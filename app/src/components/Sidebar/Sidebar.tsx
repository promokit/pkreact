import { SidebarStates } from '../../model/enums';
import Portal from '../Portal/Portal';
import SvgIcon from '../SvgIcon/SvgIcon';

import './styles.scss';

interface ComponentInterface {
  id: string;
  sidebarTitle: string;
  children: React.ReactNode;
  sidebarState: SidebarStates;
  closeSidebar: () => void;
}

const Sidebar = ({
  id,
  sidebarTitle,
  children,
  sidebarState,
  closeSidebar
}: ComponentInterface) => {
  const sidebarHeader: React.ReactNode = (
    <div className="sidebar-title flex">
      <h3 className="flex-grow">{sidebarTitle}</h3>
      <button className="clear-button close-button smooth200" onClick={closeSidebar}>
        <SvgIcon href="cross" />
      </button>
    </div>
  );
  return (
    <Portal id={id} state={sidebarState}>
      <div className="sidebar-bg smooth200" onClick={closeSidebar}></div>
      <div className="sidebar">
        <div className="sidebar-content">
          {sidebarHeader}
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Sidebar;
