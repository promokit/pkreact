import { useSelector } from 'react-redux';
import { usePsContext } from '../../../../hooks/usePsContext';
import { currenciesSelector } from '../../../../providers/header/selector';
import { contextCurrencySelector } from '../../../../providers/context/selectors';

import './styles.scss';

const CurrenciesList = () => {
  const { currencies } = useSelector(currenciesSelector);
  const { id: currentId } = useSelector(contextCurrencySelector);
  const { setCurrency } = usePsContext();

  const changeCurrency = async (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const id = li.getAttribute('data-id') as string;
    setCurrency(Number(id));
    setTimeout(() => window.location.reload(), 500);
  };

  return (
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
  );
};

export default CurrenciesList;
