import { ProductInterface } from '../../../model/interfaces';
import ProductMini from '../../product-miniatures/ProductMini/ProductMini';

import './styles.scss';

interface ComponentInterface {
  products: Array<ProductInterface>;
  closeSidebar: () => void;
}

const MiniProductList = ({ products, closeSidebar }: ComponentInterface) => {
  return (
    <ul className="mini-products-list flex flex-column">
      {products.map((product) => (
        <li key={product.id_product}>
          <ProductMini product={product} closeSidebar={closeSidebar} />
        </li>
      ))}
    </ul>
  );
};

export default MiniProductList;
