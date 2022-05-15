import { usePsContext } from '../../../hooks/usePsContext';
import avatar from '../../../assets/lottie/avatar.json';
import Lottie from 'lottie-react';

import SvgIcon from '../../SvgIcon/SvgIcon';

import './styles.scss';
import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';
import { StatusType } from '../../../model/enums';

const UserInfo = () => {
  const {
    userContext: { firstname, lastname },
    userStatus,
    setLogout
  } = usePsContext();
  const submitHandler = (e: any): void => {
    e.preventDefault();
    setLogout();
  };

  return (
    <div className="user-info">
      <div className="flex flex-column align-center user-info__avatar">
        <div className="avatar">
          <Lottie animationData={avatar} loop={true} />
        </div>
        <strong>
          Hi, {firstname} {lastname}
        </strong>
      </div>
      <ul>
        <li>
          <a href="https://alysum5.promokit.eu/en/module/pkamp/identity">
            <SvgIcon href="info" />
            <span>Customer Information</span>
          </a>
        </li>
        <li>
          <a href="https://alysum5.promokit.eu/en/module/pkamp/address">
            <SvgIcon href="address" />
            <span>Add first address</span>
          </a>
        </li>
        <li>
          <a href="https://alysum5.promokit.eu/en/module/pkamp/history">
            <SvgIcon href="file3" />
            <span>Order history and details</span>
          </a>
        </li>
        <li>
          <a href="https://alysum5.promokit.eu/en/module/pkamp/order-slip">
            <SvgIcon href="file2" />
            <span>Credit slips</span>
          </a>
        </li>
        <li>
          <a href="https://alysum5.promokit.eu/en/module/pkamp/discount">
            <SvgIcon href="voucher" />
            <span>Vouchers</span>
          </a>
        </li>
        <li>
          <a href="https://alysum5.promokit.eu/en/module/pkamp/order-follow">
            <SvgIcon href="info" />
            <span>Merchandise returns</span>
          </a>
        </li>
      </ul>
      <button className="button" onClick={submitHandler}>
        <span>Log Out</span>
        {userStatus === StatusType.Loading && <ComponentLoader />}
      </button>
    </div>
  );
};

export default UserInfo;
