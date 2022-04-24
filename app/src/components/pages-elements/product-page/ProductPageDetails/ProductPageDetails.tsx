import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../providers/store';
import { ProductPageComponentInterface } from '../../../../model/interfaces';
import ProductPageDescription from '../ProductPageDescription/ProductPageDescription';

const ProductPageDetails: React.FC = (): JSX.Element => {
  const {
    product: {
      details: { product_info }
    }
  } = useSelector<AppState, ProductPageComponentInterface>((state) => state.pages);
  return (
    <div className="product-description">
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
