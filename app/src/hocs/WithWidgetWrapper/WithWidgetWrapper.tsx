import WidgetTitle from '../../components/atoms/WidgetTitle/WidgetTitle';

import './styles.scss';

interface ComponentInterface {
  id: string;
  title?: string;
  children: React.ReactChild;
}

const WithWidgetWrapper = ({ id, title, children }: ComponentInterface) => {
  return (
    <div className={`widget widget-${id}`}>
      {title && <WidgetTitle title={title} />}
      {children}
    </div>
  );
};

export default WithWidgetWrapper;
