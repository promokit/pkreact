import { useSelector } from 'react-redux';
import { categorySelector } from '../../../../providers/pages/category/selectors';

const CategoryDetails = () => {
  const {
    images: { medium },
    label,
    description
  } = useSelector(categorySelector);

  return (
    <div className="category-block">
      <img
        src={medium.url}
        width={medium.width}
        height={medium.height}
        alt={label}
        className="img"
      />
      <h2>{label}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CategoryDetails;
