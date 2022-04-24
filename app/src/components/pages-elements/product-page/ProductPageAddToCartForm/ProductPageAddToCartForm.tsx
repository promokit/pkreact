import { useSelector } from 'react-redux';
import { AppState } from '../../../../providers/store';
import {
  AddToCartFormInterface,
  ProductPageComponentInterface
} from '../../../../model/interfaces';
import { useCallback, useState } from 'react';
import ProductPageAttributes from '../ProductPageAttributes/ProductPageAttributes';
import ProductPagePrice from '../ProductPagePrice/ProductPagePrice';
import AddToCartButton from '../../../product-miniatures/AddToCartButton/AddToCartButton';

interface CombiInterface {
  [key: number]: number;
}

const ProductPageAddToCartForm: React.FC = (): JSX.Element => {
  const {
    product: { details }
  } = useSelector<AppState, ProductPageComponentInterface>((state) => state.pages);

  const formDefaults: AddToCartFormInterface = {
    id_product: 0,
    id_product_attribute: 0,
    id_customization: 0,
    qty: 1
  };

  const memoQtyChangeHandler = useCallback((qty) => onQtyChangeHandler(qty), []);

  const [formData, updateFormData] = useState<AddToCartFormInterface>(formDefaults);

  const onFormChangeHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (!details) return;

    const combiCodes: CombiInterface = {};

    const pushAttributes = (id: string, value: string) => {
      if (!id.includes('group')) {
        return;
      }
      const key = Number(id.slice(6, -1));
      key && (combiCodes[key] = Number(value));
    };

    // push default product attributes into collector
    Object.entries(details.groups).map(
      ([groupId, group]) => (combiCodes[Number(groupId)] = group.default)
    );

    // update combi collector if customer has selected product attributes
    Object.entries(formData).map(([key, val]) => pushAttributes(key, val.toString()));

    // update combi collector if customer just now changed product attributes
    pushAttributes(e.target.name, e.target.value);

    // generate combination code based on selected attributes
    const [curentComb] = details.combinations.filter(
      (comb) => comb.combination_code === Object.values(combiCodes).join('_')
    );

    updateFormData((prevState) => {
      return {
        ...prevState,
        id_product: details.id_product,
        id_product_attribute: curentComb.id_product_attribute,
        [e.target.name]: Number(e.target.value)
      };
    });
  };

  const onQtyChangeHandler = (qty: number) => {
    updateFormData((prevState) => {
      return {
        ...prevState,
        qty
      };
    });
  };

  return (
    <form className="product__add-to-cart">
      <ProductPageAttributes formData={formData} onFormChangeHandler={onFormChangeHandler} />
      <ProductPagePrice />
      <AddToCartButton formData={formData} onQtyChangeHandler={memoQtyChangeHandler} />
    </form>
  );
};

export default ProductPageAddToCartForm;
