import { useEffect } from 'react';
import { useHeader } from '../../../hooks/useHeader';
import { NotificationType, StatusType } from '../../../model/enums';

import Logo from '../../header-elements/Logo/Logo';
import MenuButton from '../../header-elements/menu/MenuButton/MenuButton';
import Notification from '../../notifications/Notification/Notification';
import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';

import './styles.scss';

const Header = () => {
  const { fetchHeader, status } = useHeader();

  useEffect(() => {
    fetchHeader();
  }, [fetchHeader]);

  if (status === StatusType.Loading) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error) {
    return <Notification type={NotificationType.Error} message="Header doesn't loaded" />;
  }

  return (
    <header>
      <div className="header-top page-width flex">
        <Logo />
        <div className="header-top__items flex flex-grow flex-right">
          <MenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
