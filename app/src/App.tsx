import { NotificationType } from './model/enums';
import { useFetchContext } from './hooks/hooks';
import Notification from './components/notifications/Notification/Notification';
import Page from './components/layout/Page/Page';

import './App.css';

const App = () => {
  const { isError } = useFetchContext();

  return isError ? (
    <Notification type={NotificationType.Error} message="Unable to load Context" />
  ) : (
    <Page />
  );
};

export default App;
