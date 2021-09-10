/* eslint-disable */
import './language-select.scss';
import { LanguageEnum, languages } from '@alpsbte/shared/language';
import type { Language } from '@alpsbte/shared/language';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { ChangeEvent } from 'react';

export interface LanguageSelectProps {}

export const LanguageSelect: React.FC<LanguageSelectProps> = inject(
  languageStore.storeKey
)(
  observer(({}: LanguageSelectProps) => {
    return (
      <div
        className={`${`language-select`} ${
          languageStore.isSelectOpened ? 'language-select-opened' : ''
        }`}
      >
        {/* <ul className="language-select__ul">
          <li
            className="language-select__ul__active"
            onClick={() =>
              languageStore.setIsSelectedOpened(
                languageStore.isSelectOpened ? false : true
              )
            }
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
        </ul> */}
        <select
          className="language-select"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            languageStore.setLanguage(e.target.value as Language)
          }
        >
          {languages.map((o: string, i: number) => {
            return (
              <option key={i} value={o}>
                {o}
              </option>
            );
          })}
        </select>
      </div>
    );
  })
);

export default LanguageSelect;
