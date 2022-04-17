import { useNavigate } from 'react-router-dom';
import Notification from '../../components/notifications/Notification/Notification';
import { NotificationType } from '../../model/enums';
import PageTitle from '../../components/pages-elements/PageTitle/PageTitle';

const Error404: React.FC = (): JSX.Element => {
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
