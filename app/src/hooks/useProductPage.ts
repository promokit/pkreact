import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAppDispatch } from '../providers/store';
import { productSelector, statusSelector } from '../providers/pages/product/selectors';
import {
  ActionInterface,
  fetchProductPageAction,
  setProductPriceAction,
  setProductQuantityAction
} from '../providers/pages/product/actions';
import { AddToCartFormInterface } from '../model/interfaces';
import { addToCartFormDefaults } from '../providers/context/state';

interface CombiInterface {
  [key: number]: number;
}

export const useProductPage = () => {
  const dispatch = useDispatch<ThunkAppDispatch>();

  const status = useSelector(statusSelector);
  const product = useSelector(productSelector);
  const { groups, combinations, id_product, quantity } = useSelector(productSelector);

  const [formData, updateFormData] = useState<AddToCartFormInterface>(addToCartFormDefaults);

  const fetchProductPage = useCallback(
    (arg: ActionInterface) => dispatch(fetchProductPageAction(arg)),
    [dispatch]
  );

  const setProductPrice = useCallback(
    (arg: string) => dispatch(setProductPriceAction(arg)),
    [dispatch]
  );

  const setProductQuantity = useCallback(
    (arg: number) => dispatch(setProductQuantityAction(arg)),
    [dispatch]
  );

  const handleOnFormChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (!groups) return;

    const combiCodes: CombiInterface = {};

    const pushAttributes = (id: string, value: string): void => {
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

    setProductPrice(curentComb.price);
    setProductQuantity(curentComb.quantity);

    updateFormData((prevState) => {
      return {
        ...prevState,
        id_product: id_product,
        id_product_attribute: curentComb.id_product_attribute,
        [e.target.name]: Number(e.target.value)
      };
    });
  };

  return {
    status,
    product,
    formData,
    handleOnFormChange,
    updateFormData,
    setProductPrice,
    fetchProductPage,
    setProductQuantity
  } as const;
};
