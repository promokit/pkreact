import { CategoryInterface } from '../../../model/interfaces';

interface ComponentInterface {
  category: CategoryInterface;
}

const CategoryDetails: React.FC<ComponentInterface> = ({
  category: { images, label, description }
}): JSX.Element => {
  return (
    <div className="category-block">
      <img
        src={images.medium.url}
        width={images.medium.width}
        height={images.medium.height}
        alt={label}
        className="img"
      />
      <h2>{label}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CategoryDetails;
