import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AddToCartFormInterface } from '../../../../model/interfaces';
import { addToCartFormDefaults } from '../../../../providers/context/state';
import { productSelector } from '../../../../providers/pages/product/selectors';

import ProductPagePrice from '../ProductPagePrice/ProductPagePrice';
import ProductPageAttributes from '../ProductPageAttributes/ProductPageAttributes';
import AddToCartButton from '../../../product-miniatures/AddToCartButton/AddToCartButton';

import './styles.scss';

interface CombiInterface {
  [key: number]: number;
}

const ProductPageAddToCartForm = () => {
  const { groups, combinations, id_product } = useSelector(productSelector);

  const memoQtyChangeHandler = useCallback((qty) => onQtyChangeHandler(qty), []);

  const [formData, updateFormData] = useState<AddToCartFormInterface>(addToCartFormDefaults);

  useEffect(() => {
    updateFormData(() => {
      return {
        ...formData,
        id_product
      };
    });
  }, []);

  const onFormChangeHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (!groups) return;

    const combiCodes: CombiInterface = {};

    const pushAttributes = (id: string, value: string) => {
      if (!id.includes('group')) {
        return;
      }
      const key = Number(id.slice(6, -1));
      key && (combiCodes[key] = Number(value));
    };

    // push default product attributes into collector
    Object.entries(groups).map(([groupId, group]) => (combiCodes[Number(groupId)] = group.default));

    // update combi collector if customer has selected product attributes
    Object.entries(formData).map(([key, val]) => pushAttributes(key, val.toString()));

    // update combi collector if customer just now changed product attributes
    pushAttributes(e.target.name, e.target.value);

    // generate combination code based on selected attributes
    const [curentComb] = combinations.filter(
      (comb) => comb.combination_code === Object.values(combiCodes).join('_')
    );

    updateFormData((prevState) => {
      return {
        ...prevState,
        id_product: id_product,
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
