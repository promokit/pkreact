import { ProductInterface } from '../../../model/interfaces';
import ProductNormal from '../../product-miniatures/ProductNormal/ProductNormal';

import './styles.scss';

interface ComponentInterface {
  products: Array<ProductInterface>;
}

const NormalProductList: React.FC<ComponentInterface> = ({ products }): JSX.Element => {
  return (
    <div className="products-list-normal flex">
      {products.map((product) => (
        <ProductNormal key={product.id_product} product={product} />
      ))}
    </div>
  );
};

export default NormalProductList;
