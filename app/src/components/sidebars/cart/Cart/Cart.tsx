import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NotificationType, SidebarStates } from '../../../../model/enums';
import { contextCartSelector } from '../../../../providers/context/selectors';

import MiniProductList from '../../../product-listing/MiniProductList/MiniProductList';
import Notification from '../../../notifications/Notification/Notification';
import CartFooter from '../CartFooter/CartFooter';
import Indicator from '../../../atoms/Indicator/Indicator';
import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../../atoms/SvgIcon/SvgIcon';

import './styles.scss';

const Cart = () => {
  const componentId: string = 'cart';
  const cart = useSelector(contextCartSelector);
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);
  const closeSidebar = () => setSidebarState(SidebarStates.Close);
  const openSidebar = () => setSidebarState(SidebarStates.Open);
  return (
    <>
      <button className={`${componentId} relative clear-button`} onClick={openSidebar}>
        <SvgIcon href={componentId} />
        {cart && <Indicator numb={cart.products_count} />}
      </button>
      <Sidebar
        id={componentId}
        sidebarTitle="Cart"
        sidebarState={sidebarState}
        closeSidebar={closeSidebar}
      >
        {!cart ? (
          <Notification type={NotificationType.Info} message="Cart is not loaded" />
        ) : cart.products_count > 0 ? (
          <>
            <MiniProductList products={cart.products} closeSidebar={closeSidebar} />
            <CartFooter total={cart.totals.total} />
          </>
        ) : (
          <Notification type={NotificationType.Info} message="No products" />
        )}
      </Sidebar>
    </>
  );
};

export default Cart;
