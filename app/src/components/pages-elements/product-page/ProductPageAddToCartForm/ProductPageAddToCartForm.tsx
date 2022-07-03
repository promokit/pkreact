import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useProductPage } from '../../../../hooks/useProductPage';
import { productSelector } from '../../../../providers/pages/product/selectors';

import ProductPagePrice from '../ProductPagePrice/ProductPagePrice';
import ProductPageQuantity from '../ProductPageQuantity/ProductPageQuantity';
import ProductPageAttributes from '../ProductPageAttributes/ProductPageAttributes';
import AddToCartButton from '../../../product-miniatures/AddToCartButton/AddToCartButton';

import './styles.scss';

const ProductPageAddToCartForm = () => {
  const { id_product, quantity } = useSelector(productSelector);
  const { formData, updateFormData, handleOnFormChange } = useProductPage();

  useEffect(() => {
    updateFormData(() => {
      return {
        ...formData,
        id_product
      };
    });
  }, []);

  const onQtyChangeHandler = (qty: number) => {
    updateFormData((prevState) => {
      return {
        ...prevState,
        qty
      };
    });
  };

  const memoQtyChangeHandler = useCallback((qty) => onQtyChangeHandler(qty), []);

  return (
    <form className="product__add-to-cart">
      <ProductPageAttributes formData={formData} onFormChangeHandler={handleOnFormChange} />
      <ProductPagePrice />
      <ProductPageQuantity />
      <AddToCartButton
        formData={formData}
        onQtyChangeHandler={memoQtyChangeHandler}
        disabled={!Boolean(quantity)}
      />
    </form>
  );
};

export default ProductPageAddToCartForm;
