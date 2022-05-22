import { useSelector } from 'react-redux';
import { APP_DIR } from '../../../constants/constants';
import { usePsContext } from '../../../hooks/usePsContext';
import { languagesSelector } from '../../../providers/header/selector';
import { contextLanguageSelector } from '../../../providers/context/selectors';

import './styles.scss';

const LanguagesList = () => {
  const { setLanguage } = usePsContext();
  const { languages } = useSelector(languagesSelector);
  const { id: currentLangId } = useSelector(contextLanguageSelector);

  const changeLanguage = async (e: React.MouseEvent<HTMLLIElement>) => {
    const li = e.target as HTMLLIElement;
    const iso = li.getAttribute('data-iso') as string;
    setLanguage(iso);
    setTimeout(() => window.location.reload(), 500);
  };

  return (
    <ul className="languages-list user-list">
      {languages.map(({ id_lang, iso_code, name_simple }) => (
        <li
          key={id_lang}
          className={`flex align-center smooth200${
            currentLangId === Number(id_lang) ? ' active' : ''
          }`}
          data-id={id_lang}
          data-iso={iso_code}
          onClick={changeLanguage}
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
  );
};

export default LanguagesList;
