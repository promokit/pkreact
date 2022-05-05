import './styles.scss';

interface ComponentInterface {
  numb: number;
}

const Indicator = ({ numb }: ComponentInterface) => <div className="icon-indicator">{numb}</div>;

export default Indicator;
