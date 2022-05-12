import { MouseEvent, useEffect, useState } from 'react';
import { StatusType } from '../../../model/enums';
import { usePsContext } from '../../../hooks/usePsContext';
import { ProductInterface } from '../../../model/interfaces';
import { addToCartFormDefaults } from '../../../providers/context/state';

import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';
import SvgIcon from '../../SvgIcon/SvgIcon';

interface ComponentInterface {
  product: ProductInterface;
}

const RemoveFromCartButtom = ({ product }: ComponentInterface) => {
  const { id_product, id_product_attribute } = product;
  const { status, setCart } = usePsContext();
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    if (status === StatusType.Loading) return;
    setLoader(false);
  }, [status]);

  const removeFromCart = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoader(true);
    setCart({ ...addToCartFormDefaults, id_product, id_product_attribute, toDelete: 1 });
  };

  return (
    <button className="clear-button" onClick={removeFromCart}>
      {loader ? <ComponentLoader /> : <SvgIcon href="cross" />}
    </button>
  );
};

export default RemoveFromCartButtom;
