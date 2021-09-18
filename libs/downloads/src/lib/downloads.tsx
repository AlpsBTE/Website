/* eslint-disable */
import './downloads.module.scss';
import { PageTitle } from '@alpsbte/shared/components';
import { languageStore } from '@alpsbte/shared/stores';
import { inject, observer } from 'mobx-react';
import { tr } from '@alpsbte/shared/language';

export interface DownloadsProps {}

export const Downloads = inject(languageStore.storeKey)(
  observer(({}: DownloadsProps) => {
    return (
      <div>
        <PageTitle
          title={tr('pages.downloads.title')}
          subtitle={tr('pages.downloads.description')}
        />
      </div>
    );
  })
);

export default Downloads;
