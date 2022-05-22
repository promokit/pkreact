import { NotificationType } from '../../../../model/enums';
import { MenuInterface } from '../../../../model/interfaces';

import Notification from '../../../notifications/Notification/Notification';
import MenuRoot from '../MenuRoot/MenuRoot';

interface ComponentInterface {
  menu: MenuInterface[];
  closeSidebar: () => void;
}
const MenuSidebarContent = ({ menu, closeSidebar }: ComponentInterface) => {
  if (menu.length > 0) {
    return (
      <nav id="menu-nav-root">
        <MenuRoot menuItems={menu} isRoot={true} closeSidebar={closeSidebar} />
      </nav>
    );
  }
  return <Notification type={NotificationType.Info} message="No menu items yet" />;
};

export default MenuSidebarContent;
