import { MouseEvent } from 'react';
import Lottie from 'lottie-react';
import avatar from '../../../assets/lottie/avatar.json';
import { usePsContext } from '../../../hooks/usePsContext';

import Button from '../../Button/Button';
import SvgIcon from '../../SvgIcon/SvgIcon';

import './styles.scss';

const UserInfo = () => {
  const {
    userContext: { firstname, lastname },
    userStatus,
    setLogout
  } = usePsContext();
  const submitHandler = (e: MouseEvent<HTMLButtonElement>): void => {
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
          <a href="#identity">
            <SvgIcon href="info" />
            <span>Customer Information</span>
          </a>
        </li>
        <li>
          <a href="#address">
            <SvgIcon href="address" />
            <span>Add first address</span>
          </a>
        </li>
        <li>
          <a href="#history">
            <SvgIcon href="file3" />
            <span>Order history and details</span>
          </a>
        </li>
        <li>
          <a href="#order-slip">
            <SvgIcon href="file2" />
            <span>Credit slips</span>
          </a>
        </li>
        <li>
          <a href="#discount">
            <SvgIcon href="voucher" />
            <span>Vouchers</span>
          </a>
        </li>
        <li>
          <a href="#order-follow">
            <SvgIcon href="info" />
            <span>Merchandise returns</span>
          </a>
        </li>
      </ul>
      <Button title="Log Out" status={userStatus} clickHandler={submitHandler} />
    </div>
  );
};

export default UserInfo;
