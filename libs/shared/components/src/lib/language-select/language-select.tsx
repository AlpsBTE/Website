/* eslint-disable */
import './language-select.scss';
import { languages } from '@alpsbte/shared/language';
import type { Language } from '@alpsbte/shared/language';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';

export interface LanguageSelectProps {}

export const LanguageSelect: React.FC<LanguageSelectProps> = inject(
  languageStore.storeKey
)(
  observer(({}: LanguageSelectProps) => {
    return (
      <div className="language-select">
        <ul className="language-select__ul">
          <li
            className="language-select__ul__active"
            onClick={() => languageStore.setIsSelectedOpened(true)}
          >
            {languageStore.language}
          </li>
          {languageStore.isSelectOpened &&
            languages
              .filter((l) => l !== languageStore.language)
              .map((o) => {
                return (
                  <li
                    className="language-select__ul__inactive"
                    onClick={() => {
                      languageStore.setIsSelectedOpened(false);
                      languageStore.setLanguage(o as Language);
                    }}
                  >
                    {o}
                  </li>
                );
              })}
        </ul>
      </div>
    );
  })
);

export default LanguageSelect;
