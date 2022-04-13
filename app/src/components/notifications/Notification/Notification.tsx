import { NotificationType } from '../../../model/enums';

import './styles.scss';

interface ComponentInterface {
  type: NotificationType;
  message: string;
}

const Notification: React.FC<ComponentInterface> = ({ type, message }): JSX.Element => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};

export default Notification;
