import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarStates } from '../../../model/enums';
import { setLanguage } from '../../../rest/rest';
import { LanguageInterface, HeaderInterface } from '../../../model/interfaces';
import { setLanguageState, setLoadedState } from '../../../providers/context/context.actions';
import { AppDispatch, AppState } from '../../../providers/store';
import { BASE_URL } from '../../../constants/constants';
import Sidebar from '../../Sidebar/Sidebar';
import SvgIcon from '../../SvgIcon/SvgIcon';

import './styles.scss';

interface ComponentInterface {
  header: HeaderInterface;
}

const Languages: React.FC = (): JSX.Element => {
  const componentId: string = 'languages';
  const dispatch: AppDispatch = useDispatch();
  const {
    header: {
      languages: {
        languages,
        current_language: { id_lang: currentIdLang }
      }
    }
  } = useSelector<AppState, ComponentInterface>((state) => state.bootstrap);

  const [sidebarState, setSidebarState] = useState<SidebarStates>(SidebarStates.Close);

  const changeLanguage = async (e: any) => {
    const lang: LanguageInterface = await setLanguage(e.target.getAttribute('data-iso'));
    dispatch(setLanguageState(lang));
    dispatch(setLoadedState(false));
    setSidebarState(SidebarStates.Close);
  };

  return (
    <>
      <button className={componentId} onClick={() => setSidebarState(SidebarStates.Open)}>
        <SvgIcon href={componentId} />
      </button>
      <Sidebar
        id={componentId}
        sidebarTitle="Languages"
        sidebarState={sidebarState}
        setSidebarState={setSidebarState}
      >
        <ul className="languages-list user-list">
          {languages.map(({ id_lang, iso_code, name_simple }) => (
            <li
              key={id_lang}
              className={`flex align-center smooth200${
                currentIdLang === Number(id_lang) ? ' active' : ''
              }`}
              data-id={id_lang}
              data-iso={iso_code}
              onClick={changeLanguage}
            >
              <strong className="flex flex-center">
                <img
                  src={`${BASE_URL}img/flags/${iso_code}.jpg`}
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
