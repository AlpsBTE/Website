/* eslint-disable*/
import './gallery.module.scss';
import { PageTitle } from '@alpsbte/shared/components';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { tr } from '@alpsbte/shared/language';

export interface GalleryProps {}

export const Gallery: React.FC = inject(languageStore.storeKey)(
  observer(({}: GalleryProps) => {
    return (
      <div>
        <PageTitle
          title={tr('pages.gallery.title')}
          subtitle={tr('pages.gallery.description')}
        />
      </div>
    );
  })
);

export default Gallery;
