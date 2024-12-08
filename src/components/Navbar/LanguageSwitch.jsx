import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCaretDown } from 'react-icons/fa';
import enTranslations from '../../locales/en.json';
import frTranslations from '../../locales/fr.json';

const LanguageSwitch = () => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'en',  name: 'English', translation: enTranslations },
    { code: 'fr',  name: 'French', translation: frTranslations }
  ];

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="group relative cursor-pointer">
      <a href="#" className="flex items-center gap-[2px] py-2">
        {t('language')}
        <span>
          <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
        </span>
      </a>
      <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
        <ul>
          {languages.map((lang) => (
            <li key={lang.code}>
              <a
                href="#"
                onClick={() => changeLanguage(lang.code)}
                className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
              >
                {lang.translation.language} {/* Assuming each translation file has a 'language' key */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitch;