import Icon from '../../../assets/icons/icons.svg';

interface ComponentInterface {
  href: string;
}

const SvgIcon = ({ href }: ComponentInterface) => (
  <svg className="svgic" role="img" aria-label={`${href} svg image`}>
    <use href={`${Icon}#${href}`}></use>
  </svg>
);

export default SvgIcon;
