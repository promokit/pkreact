import { useSelector } from 'react-redux';
import { brandSelector } from '../../../../providers/pages/brand/selectors';

const BrandDetails = () => {
  const { logo, name, description } = useSelector(brandSelector);

  return (
    <div className="brand-block">
      {logo && <img src={logo} width={136} height={150} alt={name} className="img" />}
      {name && <h2>{name}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default BrandDetails;
