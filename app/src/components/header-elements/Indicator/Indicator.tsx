import './styles.scss';

interface ComponentInterface {
  numb: number;
}

const Indicator: React.FC<ComponentInterface> = ({ numb }): JSX.Element => {
  return <div className="icon-indicator">{numb}</div>;
};

export default Indicator;
