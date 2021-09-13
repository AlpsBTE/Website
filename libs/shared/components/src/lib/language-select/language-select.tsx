/* eslint-disable */
import './language-select.scss';
import { languages } from '@alpsbte/shared/language';
import type { Language } from '@alpsbte/shared/language';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { ChangeEvent, CSSProperties, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export interface LanguageSelectProps {
  style?: CSSProperties;
}

export const LanguageSelect: React.FC<LanguageSelectProps> = inject(
  languageStore.storeKey
)(
  observer(({ style = {} }: LanguageSelectProps) => {
    return (
      <div
        className="language-select"
        style={style}
        onClick={() => {
          console.log(select.current?.focus());
          console.log(select.current);
        }}
      >
        <FontAwesomeIcon
          icon={faGlobe}
          size="lg"
          className="language-select__icon"
        />
        <select
          className="language-select__select"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            languageStore.setLanguage(e.target.value as Language)
          }
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
