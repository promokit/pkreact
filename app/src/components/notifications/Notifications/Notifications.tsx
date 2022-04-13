import { NotificationType } from '../../../model/enums';
import { NotificationInterface } from '../../../model/interfaces';
import Notification from '../Notification/Notification';

interface ComponentInterface {
  message: NotificationInterface;
}

export const defaultMessages: NotificationInterface = {
  info: '',
  warning: '',
  error: ''
};

const Notifications: React.FC<ComponentInterface> = ({ message }): JSX.Element => {
  if (message.error) {
    return <Notification type={NotificationType.Error} message={message.error} />;
  }
  return (
    <>
      {message.info && <Notification type={NotificationType.Info} message={message.info} />}
      {message.warning && (
        <Notification type={NotificationType.Warning} message={message.warning} />
      )}
    </>
  );
};

export default Notifications;
