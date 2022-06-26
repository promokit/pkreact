import WidgetTitle from '../../atoms/WidgetTitle/WidgetTitle';

import './styles.scss';

interface ComponentInterface {
  id: string;
  title?: string;
  children: React.ReactChild;
}

const WidgetWrapper = ({ id, title = '', children }: ComponentInterface) => {
  return (
    <div className={`widget widget-${id}`}>
      {title && <WidgetTitle title={title} />}
      {children}
    </div>
  );
};

export default WidgetWrapper;
