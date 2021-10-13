/* eslint-disable*/
import './gallery.scss';
import { PageTitle } from '@alpsbte/shared/components';
import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { tr } from '@alpsbte/shared/language';
import { Button } from '@alpsbte/shared/components';

export interface GalleryProps {}

export const Gallery: React.FC = inject(languageStore.storeKey)(
  observer(({}: GalleryProps) => {
    const [place, setPlace] = useState('wien');

    return (
      <div>
        <PageTitle
          title={tr('pages.gallery.title')}
          subtitle={tr('pages.gallery.description')}
        />
        <Button
          label="Wien"
          textColor="#fff"
          fillColor="#6D6D6D"
          size="lg"
          onClick={() => alert('Test')}
        />

        <div className="gallery__container">
          <div className="gallery__image-container">
            {[...Array(9)].map((x, i) => (
              <img
                src={
                  'http://localhost:3333/api/assets/' +
                  place +
                  '/' +
                  i +
                  '.webp'
                }
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
