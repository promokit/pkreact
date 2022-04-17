import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SidebarStates } from '../../../model/enums';
import { ContextInterface } from '../../../model/interfaces';
import { NotificationType } from '../../../model/enums';
import { AppState } from '../../../providers/store';

import MiniProductList from '../../product-listing/MiniProductList/MiniProductList';
import Notification from '../../notifications/Notification/Notification';
import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../SvgIcon/SvgIcon';
import CartFooter from '../CartFooter/CartFooter';
import Indicator from '../Indicator/Indicator';

import './styles.scss';

const Cart: React.FC = (): JSX.Element => {
  const componentId: string = 'cart';
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);
  const { details } = useSelector<AppState, ContextInterface>((state) => state.context);

  return (
    <>
      <button
        className={`${componentId} relative`}
        onClick={() => setSidebarState(SidebarStates.Open)}
      >
        <SvgIcon href={componentId} />
        {details && <Indicator numb={details.cart.products_count} />}
      </button>
      <Sidebar
        id={componentId}
        sidebarTitle="Cart"
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      >
        {!details ? (
          <Notification type={NotificationType.Info} message="Cart is not loaded" />
        ) : details.cart.products_count > 0 ? (
          <>
            <MiniProductList products={details.cart.products} />
            <CartFooter total={details.cart.totals.total} />
          </>
        ) : (
          <Notification type={NotificationType.Info} message="No products" />
        )}
      </Sidebar>
    </>
  );
};

export default Cart;
