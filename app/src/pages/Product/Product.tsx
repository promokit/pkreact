import { useParams } from 'react-router-dom';
import { useFetchProduct } from '../../hooks/hooks';
import { NotificationType } from '../../model/enums';

import ProductPageImage from '../../components/pages-elements/product-page/ProductPageImage/ProductPageImage';
import AddToCartButton from '../../components/product-miniatures/AddToCartButton/AddToCartButton';
import ComponentLoader from '../../components/loaders/ComponentLoader/ComponentLoader';
import Notifications from '../../components/notifications/Notifications/Notifications';
import ProductPrice from '../../components/product-miniatures/ProductPrice/ProductPrice';
import Notification from '../../components/notifications/Notification/Notification';

import './styles.scss';

const Product: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const { isLoading, msg, product } = useFetchProduct(Number(id) || 0);

  if (isLoading) {
    return <ComponentLoader />;
  }

  if (msg.error) {
    return <Notifications message={msg} />;
  }

  if (!product) {
    return <Notification type={NotificationType.Error} message="Product doesn't loaded" />;
  }

  return (
    <div className="product">
      <ProductPageImage product={product} />
      <div className="product-brand">
        <span>Brand:</span> {product.manufacturer_name}
      </div>
      <h2>{product.name}</h2>
      <p className="product-desc">{product.description_short}</p>
      <p>
        {Object.keys(product.groups).length > 0 &&
          Object.entries(product.groups).map(([id_attr_group, group]) => (
            <div key={id_attr_group}>
              <h5>{group.name}</h5>
              {group.group_type === 'select' && (
                <select>
                  {Object.values(group.attributes).map((attr) => {
                    return <option>{attr.name}</option>;
                  })}
                </select>
              )}
              {group.group_type === 'color' && (
                <ul>
                  {Object.values(group.attributes).map((attr) => (
                    <li>
                      <input type="radio" name={`group[${id_attr_group}]`} />
                      <label>{attr.name}</label>
                    </li>
                  ))}
                </ul>
              )}
              {group.group_type === 'radio' && (
                <ul>
                  {Object.values(group.attributes).map((attr) => (
                    <li>
                      <input type="radio" name={`group[${id_attr_group}]`} />
                      <label>{attr.name}</label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </p>
      <ProductPrice product={product} />
      <AddToCartButton id={product.id_product} />
      <details className="product-description">
        <summary>Details</summary>
        <div>
          <h4>Description</h4>
          <p>{product.description}</p>
          <h4>Variations</h4>
        </div>
      </details>
    </div>
  );
};

export default Product;
