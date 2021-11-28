/* eslint-disable */
import './language-select.scss';
import { languages } from '@alpsbte/shared/language';
import type { Language } from '@alpsbte/shared/language';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { ChangeEvent, CSSProperties, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router';
import { useLocation } from 'react-router-dom';

export interface LanguageSelectProps {
  style?: CSSProperties;
}

export const LanguageSelect: React.FC<LanguageSelectProps> = inject(
  languageStore.storeKey
)(
  observer(({ style = {} }: LanguageSelectProps) => {
    const location = useLocation(); // URL location
    const [dropdown, setDropdown] = useState(false);
    const shortToLong: { [key: string]: string } = {
      en: 'English',
      de: 'Deutsch',
      fr: 'Français',
      it: 'Italiano',
    };

    return (
      <div className="language-select">
        <button onClick={() => setDropdown(!dropdown)} style={style}>
          <FontAwesomeIcon
            icon={faGlobe}
            size="lg"
            className="language-select__icon"
            style={style}
          />
          {shortToLong[languageStore.language]}
        </button>
        <div
          className="language-select__content"
          style={{ display: dropdown ? 'block' : 'none' }}
        >
          {languages.map((o: string, i: number) => {
            return (
              <div
                id={o}
                className="language-select__content__text"
                onClick={() => {
                  setDropdown(false);
                  languageStore.setLanguage(o as Language);
                  window.location.replace(
                    `/${languageStore.language}/${
                      location.pathname.split('/')[2]
                    }`
                  );
                }}
              >
                <p> {o != languageStore.language ? shortToLong[o] : ''} </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  })
);

export default LanguageSelect;
