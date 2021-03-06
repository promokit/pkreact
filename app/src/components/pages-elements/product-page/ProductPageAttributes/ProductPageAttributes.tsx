import { useSelector } from 'react-redux';
import { AddToCartFormInterface } from '../../../../model/interfaces';
import { productSelector } from '../../../../providers/pages/product/selectors';

import './styles.scss';

interface ComponentInterface {
  onFormChangeHandler: (value: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  formData: AddToCartFormInterface;
}

const ProductPageAttributes = ({ formData, onFormChangeHandler }: ComponentInterface) => {
  const { groups } = useSelector(productSelector);

  if (!Object.keys(groups).length) return <></>;

  return (
    <div className="attributes">
      <h4>Variations</h4>
      {Object.entries(groups).map(([id_attr_group, group]) => (
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
                  {attr.name}
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
                    {attr.name}
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
                    {attr.name}
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
