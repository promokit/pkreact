interface ComponentInterface {
  title: string;
}
const WidgetTitle: React.FC<ComponentInterface> = ({ title }): JSX.Element => (
  <h2 className="widget-title">{title}</h2>
);

export default WidgetTitle;
