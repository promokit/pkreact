import { ProductPageInterface } from '../../../../model/interfaces';

interface AddToCartFormInterface {
  id_product: number;
  id_product_attribute: number;
  id_customization: number;
  qty: number;
  [key: string]: string | number;
}

interface ComponentInterface {
  product: ProductPageInterface;
  onFormChangeHandler: Function;
  formData: AddToCartFormInterface;
}

const ProductPageAttributes: React.FC<ComponentInterface> = ({
  product,
  formData,
  onFormChangeHandler
}): JSX.Element => {
  return (
    <div className="attributes">
      {Object.entries(product.groups).map(([id_attr_group, group]) => (
        <div className="attributes__group" key={id_attr_group}>
          <h5>{group.name}</h5>
          {group.group_type === 'select' && (
            <select
              onChange={(e) => onFormChangeHandler(e)}
              name={`group[${id_attr_group}]`}
              value={formData[`group[${id_attr_group}]`] || group.default}
            >
              {Object.entries(group.attributes).map(([key, attr]) => (
                <option key={attr.name} value={key}>
                  {attr.name} ({key})
                </option>
              ))}
            </select>
          )}
          {group.group_type === 'color' && (
            <ul className="clear-list">
              {Object.entries(group.attributes).map(([key, attr]) => (
                <li key={attr.name}>
                  <label>
                    <input
                      type="radio"
                      name={`group[${id_attr_group}]`}
                      value={key}
                      onChange={(e) => onFormChangeHandler(e)}
                      data-product-attribute={id_attr_group}
                      checked={
                        (formData[`group[${id_attr_group}]`] || group.default) === Number(key)
                      }
                    />
                    {attr.name} ({key})
                  </label>
                </li>
              ))}
            </ul>
          )}
          {group.group_type === 'radio' && (
            <ul className="clear-list">
              {Object.entries(group.attributes).map(([key, attr]) => (
                <li key={attr.name}>
                  <label>
                    <input
                      type="radio"
                      name={`group[${id_attr_group}]`}
                      checked={
                        (formData[`group[${id_attr_group}]`] || group.default) === Number(key)
                      }
                    />
                    {attr.name} ({key})
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductPageAttributes;
