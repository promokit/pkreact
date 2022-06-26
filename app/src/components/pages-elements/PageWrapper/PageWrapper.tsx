import { NotificationType, StatusType } from '../../../model/enums';

import Notification from '../../notifications/Notification/Notification';
import ComponentLoader from '../../atoms/loaders/ComponentLoader/ComponentLoader';

interface ComponentInterface {
  status: StatusType;
  loaderCondition?: boolean;
  children: React.ReactChild;
}

const PageWrapper = ({ status, loaderCondition = true, children }: ComponentInterface) => {
  if (status === StatusType.Loading && loaderCondition) {
    return <ComponentLoader />;
  }

  if (status === StatusType.Error) {
    return <Notification type={NotificationType.Error} message="Unable to load this page" />;
  }

  return <>{children}</>;
};

export default PageWrapper;
