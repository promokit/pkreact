import { useNavigate } from 'react-router-dom';
import { NotificationType } from '../../model/enums';

import Notification from '../../components/notifications/Notification/Notification';
import PageTitle from '../../components/pages-elements/PageTitle/PageTitle';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageTitle title="Error Page" />
      <Notification type={NotificationType.Error} message="Page not found" />
      <button className="button" onClick={() => navigate('/')}>
        Go to Home
      </button>
    </>
  );
};

export default Error404;
