interface ComponentInterface {
  title: string;
}
const WidgetTitle = ({ title }: ComponentInterface) => <h2 className="widget-title">{title}</h2>;

export default WidgetTitle;
