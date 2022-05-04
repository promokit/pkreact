import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NotificationType, SidebarStates } from '../../../model/enums';
import { contextCartSelector } from '../../../providers/context/selectors';

import MiniProductList from '../../product-listing/MiniProductList/MiniProductList';
import Notification from '../../notifications/Notification/Notification';
import CartFooter from '../CartFooter/CartFooter';
import Indicator from '../Indicator/Indicator';
import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../SvgIcon/SvgIcon';

import './styles.scss';

const Cart: React.FC = (): JSX.Element => {
  const componentId: string = 'cart';
  const cart = useSelector(contextCartSelector);
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);

  return (
    <>
      <button
        className={`${componentId} relative`}
        onClick={() => setSidebarState(SidebarStates.Open)}
      >
        <SvgIcon href={componentId} />
        {cart && <Indicator numb={cart.products_count} />}
      </button>
      <Sidebar
        id={componentId}
        sidebarTitle="Cart"
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      >
        {!cart ? (
          <Notification type={NotificationType.Info} message="Cart is not loaded" />
        ) : cart.products_count > 0 ? (
          <>
            <MiniProductList products={cart.products} />
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
