import { NotificationType } from '../../../model/enums';

import './styles.scss';

interface ComponentInterface {
  type: NotificationType;
  message: string;
}

const Notification = ({ type, message }: ComponentInterface) => (
  <div className={`alert alert-${type}`}>{message}</div>
);

export default Notification;
