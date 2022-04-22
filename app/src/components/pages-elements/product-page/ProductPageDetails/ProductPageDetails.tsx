import { Fragment } from 'react';
import { ProductPageInterface } from '../../../../model/interfaces';

interface ComponentInterface {
  product: ProductPageInterface;
}

const ProductPageDetails: React.FC<ComponentInterface> = ({ product }): JSX.Element => {
  return (
    <div className="product-description">
      <h4>Description</h4>
      <p>{product.description}</p>
      <h4>Parameters</h4>
      <dl className="product-info">
        {product.product_info.map(({ name, value }) => (
          <Fragment key={name}>
            <dt>{name}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
};

export default ProductPageDetails;
