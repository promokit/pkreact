import { useEffect, useRef, useState } from 'react';
import { getRestSearch } from '../../../rest/rest';
import { SidebarStates } from '../../../model/enums';
import { APP_CONFIG } from '../../../constants/constants';
import { NotificationInterface, ProductInterface } from '../../../model/interfaces';

import Notifications, { defaultMessages } from '../../notifications/Notifications/Notifications';
import MiniProductList from '../../product-listing/MiniProductList/MiniProductList';
import ComponentLoader from '../../atoms/loaders/ComponentLoader/ComponentLoader';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import Sidebar from '../Sidebar/Sidebar';

import './styles.scss';

const Search = () => {
  const componentId: string = 'search';
  const config = {
    inputId: 'search-input',
    minSymbols: APP_CONFIG.search.minSymbolsNumber
  };

  const [loader, setLoader] = useState<boolean>(false);
  const [msg, setMessage] = useState<NotificationInterface>(defaultMessages);
  const [searchResults, setSearchResults] = useState<ProductInterface[]>([]);
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);
  const closeSidebar = () => setSidebarState(SidebarStates.Close);
  const openSidebar = () => setSidebarState(SidebarStates.Open);

  const input = document.getElementById(config.inputId) as HTMLInputElement;
  const inputRef = useRef<HTMLInputElement>(input);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    value.length === 0
      ? inputRef.current.classList.add('emptyInput')
      : inputRef.current.classList.remove('emptyInput');

    if (value.length < config.minSymbols) {
      setMessage((msg) => ({
        ...msg,
        info: value.length > 0 ? `Type at least ${config.minSymbols} symbols...` : ''
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
      <button className={`${componentId} clear-button`} onClick={openSidebar}>
        <SvgIcon href={componentId} />
      </button>
      <Sidebar
        id={componentId}
        sidebarTitle="Search"
        sidebarState={sidebarState}
        closeSidebar={closeSidebar}
      >
        <div className="sidebar-content__input relative">
          <input
            ref={inputRef}
            id="search-input"
            type="search"
            name="search"
            placeholder="Search..."
            onChange={handleChange}
            className="emptyInput"
          />
          <SvgIcon href="search" />
        </div>
        {loader && <ComponentLoader />}
        {loader || <Notifications message={msg} />}
        {!loader && searchResults.length > 0 && (
          <MiniProductList products={searchResults} closeSidebar={closeSidebar} />
        )}
      </Sidebar>
    </>
  );
};

export default Search;
