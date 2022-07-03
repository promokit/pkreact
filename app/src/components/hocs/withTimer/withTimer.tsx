import { useCallback, useEffect } from 'react';
import { NotificationType } from '../../../model/enums';
import { APP_CONFIG } from '../../../constants/constants';

import './styles.scss';

interface HocInterface {
  type: NotificationType;
  message: string;
  setMessage: (message: string) => {};
  delay?: number;
}

const withTimer = (Component: any) => {
  return (props: HocInterface) => {
    const { message, setMessage, delay = APP_CONFIG.notifications.timeout, ...rest } = props;

    const clearMessageTimer = useCallback(
      () => setTimeout(() => setMessage(''), delay),
      [setMessage, delay]
    );

    useEffect(() => {
      const timerID = clearMessageTimer();
      return () => {
        clearTimeout(timerID);
      };
    }, [message, clearMessageTimer]);

    return (
      <div className="notification-timeout" style={{ animationDuration: `${delay}ms` }}>
        {message && <Component message={message} {...rest} />}
      </div>
    );
  };
};

export default withTimer;
