import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarStates } from '../../../model/enums';
import { setCurrency } from '../../../rest/rest';
import { CurrencyInterface, HeaderInterface } from '../../../model/interfaces';
import {
  setCurrencyState,
  setLoadedState,
} from '../../../providers/context/context.actions';
import { AppDispatch, AppState } from '../../../providers/store';
import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../SvgIcon/SvgIcon';

import './styles.scss';

interface ComponentInterface {
  header: HeaderInterface;
}

const Currencies: React.FC = (): JSX.Element => {
  const componentId: string = 'currencies';
  const {
    header: {
      currencies: {
        currencies,
        current_currency: { id: currentId },
      },
    },
  } = useSelector<AppState, ComponentInterface>((state) => state.bootstrap);

  const [sidebarState, setSidebarState] = useState<SidebarStates>(
    SidebarStates.Close
  );

  const dispatch: AppDispatch = useDispatch();

  const changeCurrency = async (event: any) => {
    const currency: CurrencyInterface = await setCurrency(
      event.target.getAttribute('data-id')
    );
    dispatch(setLoadedState(false));
    dispatch(setCurrencyState(currency));
  };

  return (
    <>
      <button
        className={componentId}
        onClick={() => setSidebarState(SidebarStates.Open)}
      >
        <SvgIcon href={componentId} />
      </button>
      <Sidebar
        id={componentId}
        sidebarTitle="Currencies"
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      >
        <ul className="currencies-list user-list">
          {currencies.map(({ id, name, symbol }) => (
            <li
              key={id}
              className={`flex smooth200${currentId === id ? ' active' : ''}`}
              data-id={id}
              onClick={changeCurrency}
            >
              <strong>{symbol}</strong>
              <span className="flex-grow">{name}</span>
            </li>
          ))}
        </ul>
      </Sidebar>
    </>
  );
};

export default Currencies;
