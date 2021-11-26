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

export interface LanguageSelectProps {
  style?: CSSProperties;
}

export const LanguageSelect: React.FC<LanguageSelectProps> = inject(
  languageStore.storeKey
)(
  observer(({ style = {} }: LanguageSelectProps) => {
    const thisPage = window.location.pathname.split('/')[2];

    return (
      <div className="language-select" style={style}>
        <FontAwesomeIcon
          icon={faGlobe}
          size="lg"
          className="language-select__icon"
        />
        <select
          className="language-select__select"
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            languageStore.setLanguage(e.target.value as Language);
            window.location.replace(`/${languageStore.language}/${thisPage}`);
          }}
          value={languageStore.language}
          style={style}
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
