import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { productSelector } from '../../../../providers/pages/product/selectors';

import ProductPageDescription from '../ProductPageDescription/ProductPageDescription';

import './styles.scss';

const ProductPageDetails: React.FC = (): JSX.Element => {
  const { product_info } = useSelector(productSelector);
  return (
    <div className="product__description">
      <h4>Description</h4>
      <ProductPageDescription short={false} full={true} />
      <h4>Parameters</h4>
      <dl className="product-info">
        {product_info.map(({ name, value }) => (
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
