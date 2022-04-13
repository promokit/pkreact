import { useState } from 'react';
import { SidebarStates } from '../../../model/enums';
import { CartTotalInterface, ProductInterface } from '../../../model/interfaces';
import { NotificationType } from '../../../model/enums';
import { getRestCart } from '../../../rest/rest';

import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';
import Notification from '../../notifications/Notification/Notification';
import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../SvgIcon/SvgIcon';
import MiniProductList from '../../product-listing/MiniProductList/MiniProductList';
import CartFooter from '../CartFooter/CartFooter';

import './styles.scss';

const Cart: React.FC = (): JSX.Element => {
  const componentId: string = 'cart';
  const cartTotalDefault: CartTotalInterface = {
    amount: 0,
    label: 'Total',
    type: '',
    value: '0'
  };
  const [loader, setLoader] = useState<boolean>(false);
  const [cartTotal, setCartTotal] = useState<CartTotalInterface>(cartTotalDefault);
  const [cartProducts, setCartProducts] = useState<ProductInterface[]>([]);
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);

  const openSidebar = async () => {
    setLoader(true);
    setSidebarState(SidebarStates.Open);

    const cart = await getRestCart();
    setCartTotal(cart.psdata.totals.total);
    setCartProducts(cart.psdata.products);
    setLoader(false);
  };

  return (
    <>
      <button className={componentId} onClick={openSidebar}>
        <SvgIcon href={componentId} />
      </button>
      <Sidebar
        id={componentId}
        sidebarTitle="Cart"
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      >
        {loader ? (
          <ComponentLoader />
        ) : cartProducts.length > 0 ? (
          <>
            <MiniProductList products={cartProducts} />
            <CartFooter total={cartTotal} />
          </>
        ) : (
          <Notification type={NotificationType.Info} message="No products" />
        )}
      </Sidebar>
    </>
  );
};

export default Cart;
