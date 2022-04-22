import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchProduct } from '../../hooks/hooks';
import { NotificationType } from '../../model/enums';
import { AddToCartFormInterface } from '../../model/interfaces';

import ProductPageAttributes from '../../components/pages-elements/product-page/ProductPageAttributes/ProductPageAttributes';
import ProductPageDetails from '../../components/pages-elements/product-page/ProductPageDetails/ProductPageDetails';
import ProductPageImage from '../../components/pages-elements/product-page/ProductPageImage/ProductPageImage';
import AddToCartButton from '../../components/product-miniatures/AddToCartButton/AddToCartButton';
import ComponentLoader from '../../components/loaders/ComponentLoader/ComponentLoader';
import Notifications from '../../components/notifications/Notifications/Notifications';
import ProductPrice from '../../components/product-miniatures/ProductPrice/ProductPrice';
import Notification from '../../components/notifications/Notification/Notification';

import './styles.scss';

interface CombiInterface {
  [key: number]: number;
}

const Product: React.FC = (): JSX.Element => {
  const formDefaults: AddToCartFormInterface = {
    id_product: 0,
    id_product_attribute: 0,
    id_customization: 0,
    qty: 1
  };
  const { id } = useParams();
  const { isLoading, msg, product } = useFetchProduct(Number(id) || 0);
  const [formData, updateFormData] = useState<AddToCartFormInterface>(formDefaults);

  const memoQtyChangeHandler = useCallback((qty) => onQtyChangeHandler(qty), []);

  const onFormChangeHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    if (!product) return;

    const combiCodes: CombiInterface = {};

    const pushAttributes = (id: string, value: string) => {
      if (!id.includes('group')) {
        return;
      }
      const key = Number(id.slice(6, -1));
      key && (combiCodes[key] = Number(value));
    };

    // push default product attributes into collector
    Object.entries(product.groups).map(
      ([groupId, group]) => (combiCodes[Number(groupId)] = group.default)
    );

    // update combi collector if customer has selected product attributes
    Object.entries(formData).map(([key, val]) => pushAttributes(key, val.toString()));

    // update combi collector if customer just now changed product attributes
    pushAttributes(e.target.name, e.target.value);

    // generate combination code based on selected attributes
    const [curentComb] = product.combinations.filter(
      (comb) => comb.combination_code === Object.values(combiCodes).join('_')
    );

    updateFormData((prevState) => {
      return {
        ...prevState,
        id_product: product.id_product,
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
      <form className="attributes">
        <ProductPageAttributes
          product={product}
          formData={formData}
          onFormChangeHandler={onFormChangeHandler}
        />
        <ProductPrice product={product} />
        <AddToCartButton formData={formData} onQtyChangeHandler={memoQtyChangeHandler} />
      </form>
      <ProductPageDetails product={product} />
    </div>
  );
};

export default Product;
