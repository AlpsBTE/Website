/* eslint-disable*/
import './gallery.scss';
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
        <div className="gallery__container">
          <div className="gallery__image-container">
            {[...Array(9)].map((x, i) => (
              <img
                loading="lazy"
                src={'http://localhost:3333/api/assets/basel/' + i + '.webp'}
                className="gallery__image"
              ></img>
            ))}
          </div>
        </div>
      </div>
    );
  })
);

export default Gallery;
