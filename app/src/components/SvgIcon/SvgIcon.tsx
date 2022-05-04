import Icon from '../../assets/icons/icons.svg';

interface ComponentInterface {
  href: string;
}

const SvgIcon: React.FC<ComponentInterface> = ({ href }) => (
  <svg className="svgic">
    <use href={`${process.env.REACT_APP_BUILD_PATH}${Icon}#${href}`}></use>
  </svg>
);

export default SvgIcon;
