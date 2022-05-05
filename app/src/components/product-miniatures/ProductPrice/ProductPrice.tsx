import { ProductInterface, ProductPageInterface } from '../../../model/interfaces';

import './styles.scss';

interface ComponentInterface {
  product: ProductInterface | ProductPageInterface;
}

const ProductPrice = ({
  product: { price, regular_price, discount_amount, cart_quantity }
}: ComponentInterface) => {
  return (
    <div className="product-price">
      {cart_quantity && <span>{cart_quantity}✕</span>}
      {!discount_amount && <strong>{price}</strong>}
      {discount_amount && (
        <>
          <del>{regular_price}</del>
          <strong>{price}</strong>
        </>
      )}
    </div>
  );
};

export default ProductPrice;
