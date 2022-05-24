import { useEffect } from 'react';
import { usePsContext } from './hooks/usePsContext';
import { NotificationType, StatusType } from './model/enums';

import Notification from './components/notifications/Notification/Notification';
import Page from './components/layout/Page/Page';

import './App.css';

const App = () => {
  const { getContext, status } = usePsContext();

  useEffect(() => {
    getContext();
  }, [getContext]);

  return status === StatusType.Error ? (
    <Notification type={NotificationType.Error} message="Unable to load Context" />
  ) : (
    <Page />
  );
};

export default App;
