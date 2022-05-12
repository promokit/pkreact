import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SidebarStates } from '../../../model/enums';
import { APP_DIR } from '../../../constants/constants';
import { usePsContext } from '../../../hooks/usePsContext';
import { languagesSelector } from '../../../providers/header/selector';
import { contextLanguageSelector } from '../../../providers/context/selectors';

import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../SvgIcon/SvgIcon';

import './styles.scss';

const Languages = () => {
  const componentId: string = 'languages';
  const { setLanguage } = usePsContext();
  const { languages } = useSelector(languagesSelector);
  const { id: currentLangId } = useSelector(contextLanguageSelector);
  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);
  const closeSidebar = () => setSidebarState(SidebarStates.Close);
  const openSidebar = () => setSidebarState(SidebarStates.Open);

  const changeLanguage = async (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const iso = li.getAttribute('data-iso') as string;
    setLanguage(iso);
    closeSidebar();
  };

  return (
    <>
      <button className={componentId} onClick={openSidebar}>
        <SvgIcon href={componentId} />
      </button>
      <Sidebar
        id={componentId}
        sidebarTitle="Languages"
        sidebarState={sidebarState}
        closeSidebar={closeSidebar}
      >
        <ul className="languages-list user-list">
          {languages.map(({ id_lang, iso_code, name_simple }) => (
            <li
              key={id_lang}
              className={`flex align-center smooth200${
                currentLangId === Number(id_lang) ? ' active' : ''
              }`}
              data-id={id_lang}
              data-iso={iso_code}
              onClick={(e) => changeLanguage(e)}
            >
              <strong className="flex flex-center">
                <img
                  src={`${APP_DIR}img/flags/${iso_code}.jpg`}
                  width="16"
                  height="11"
                  alt={iso_code}
                />
              </strong>
              <span>{name_simple}</span>
            </li>
          ))}
        </ul>
      </Sidebar>
    </>
  );
};

export default Languages;
