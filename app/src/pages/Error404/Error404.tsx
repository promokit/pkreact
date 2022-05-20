import { useNavigate } from 'react-router-dom';
import { APP_URL } from '../../constants/constants';
import { NotificationType } from '../../model/enums';

import Notification from '../../components/notifications/Notification/Notification';
import PageTitle from '../../components/pages-elements/PageTitle/PageTitle';
import Button from '../../components/Button/Button';

const Error404 = () => {
  const navigate = useNavigate();
  const goHome = () => navigate(APP_URL);
  return (
    <>
      <PageTitle title="Error Page" />
      <Notification type={NotificationType.Error} message="Page not found" />
      <Button title="Go to Home" clickHandler={goHome} />
    </>
  );
};

export default Error404;
