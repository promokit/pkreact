import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SidebarStates } from '../../../model/enums';
import { currenciesSelector } from '../../../providers/header/selector';
import { contextCurrencySelector } from '../../../providers/context/selectors';
import { usePsContext } from '../../../hooks/usePsContext';

import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../SvgIcon/SvgIcon';

import './styles.scss';

const Currencies: React.FC = (): JSX.Element => {
  const componentId: string = 'currencies';
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);
  const { currencies } = useSelector(currenciesSelector);
  const { id: currentId } = useSelector(contextCurrencySelector);
  const { setCurrency } = usePsContext();

  const changeCurrency = async (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const id = li.getAttribute('data-id') as string;
    setSidebarState(SidebarStates.Close);
    setCurrency(Number(id));
  };

  return (
    <>
      <button className={componentId} onClick={() => setSidebarState(SidebarStates.Open)}>
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
              onClick={(e) => changeCurrency(e)}
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
