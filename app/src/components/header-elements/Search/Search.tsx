import { useEffect, useRef, useState } from 'react';
import { SidebarStates } from '../../../model/enums';
import { NotificationInterface, ProductInterface } from '../../../model/interfaces';
import { getRestSearch } from '../../../rest/rest';
import ComponentLoader from '../../loaders/ComponentLoader/ComponentLoader';
import Notifications, { defaultMessages } from '../../notifications/Notifications/Notifications';
import MiniProductList from '../../product-listing/MiniProductList/MiniProductList';
import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../SvgIcon/SvgIcon';

import './styles.scss';

const Search: React.FC = (): JSX.Element => {
  const componentId: string = 'search';
  const config = {
    inputId: 'search-input',
    minSymbolsNumber: 3
  };

  const [msg, setMessage] = useState<NotificationInterface>(defaultMessages);
  const [loader, setLoader] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<ProductInterface[]>([]);
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);

  const input = document.getElementById(config.inputId) as HTMLInputElement;
  const inputRef = useRef(input);

  useEffect(() => {
    inputRef.current.focus();
  });

  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    value.length === 0
      ? inputRef.current.classList.add('emptyInput')
      : inputRef.current.classList.remove('emptyInput');

    if (value.length < config.minSymbolsNumber) {
      setMessage((msg) => ({
        ...msg,
        info: value.length > 0 ? `Type at least ${config.minSymbolsNumber} symbols...` : ''
      }));
      setSearchResults([]);
      return;
    }

    try {
      setLoader(true);
      const { success, psdata } = await getRestSearch(value);
      success
        ? setSearchResults(psdata.products)
        : setMessage((msg) => ({ ...msg, error: 'Search request is not succeeded' }));
      setMessage((msg) => ({ ...msg, info: psdata.products.length === 0 ? 'Nothing found' : '' }));
    } catch (error) {
      setMessage((msg) => ({ ...msg, error: 'Server error' }));
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <button className={componentId} onClick={() => setSidebarState(SidebarStates.Open)}>
        <SvgIcon href={componentId} />
      </button>
      <Sidebar
        id={componentId}
        sidebarTitle="Search"
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      >
        <div className="sidebar-content__input relative">
          <input
            ref={inputRef}
            id="search-input"
            type="search"
            name="search"
            placeholder="Search..."
            onChange={onChangeHandler}
            className="emptyInput"
          />
          <SvgIcon href="search" />
        </div>
        {loader && <ComponentLoader />}
        {loader || <Notifications message={msg} />}
        {!loader && searchResults.length > 0 && <MiniProductList products={searchResults} />}
      </Sidebar>
    </>
  );
};

export default Search;
