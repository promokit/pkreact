import { useSelector } from 'react-redux';
import { AppState } from '../../../../providers/store';
import { ProductPageComponentInterface } from '../../../../model/interfaces';

const ProductPageBrand: React.FC = (): JSX.Element => {
  const {
    product: {
      details: { manufacturer_name }
    }
  } = useSelector<AppState, ProductPageComponentInterface>((state) => state.pages);
  return (
    <div className="product-brand">
      <span>Brand:</span> {manufacturer_name}
    </div>
  );
};

export default ProductPageBrand;
