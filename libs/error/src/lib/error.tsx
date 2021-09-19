/* eslint-disable */
import './error.scss';
import { PageTitle } from '@alpsbte/shared/components';
import { languageStore } from '@alpsbte/shared/stores';
import { inject, observer } from 'mobx-react';
import { tr } from '@alpsbte/shared/language';

export interface ErrorProps {}

export const Error = inject(languageStore.storeKey)(
  observer(({}: ErrorProps) => {
    return (
      <div className="error-page">
        <PageTitle
          title={tr('pages.error.title')}
          subtitle={tr('pages.error.description')}
          image="https://i.imgur.com/qTC69pF.png"
          className="error-page__page-title"
        />
      </div>
    );
  })
);

export default Error;
