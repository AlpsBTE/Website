/* eslint-disable*/
import './gallery.scss';
import { PageTitle } from '@alpsbte/shared/components';
import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { tr } from '@alpsbte/shared/language';
import { Button } from '@alpsbte/shared/components';
import { url } from 'inspector';

export interface GalleryProps {}

export const Gallery: React.FC = inject(languageStore.storeKey)(
  observer(({}: GalleryProps) => {
    const places = {
      basel: 'Basel',
      graz: 'Graz',
      luzern: 'Luzern',
      oesterreich: 'Österreich',
      salzburg: 'Salzburg',
      schweiz: 'Schweiz',
      wien: 'Wien',
    };

    const [place, setPlace] = useState('basel');

    const changePlace = (newPlace: string) => {
      setPlace('loading');
      setTimeout(() => {
        setPlace(newPlace);
      }, 20);
    };

    return (
      <div>
        <PageTitle
          title={tr('pages.gallery.title')}
          subtitle={tr('pages.gallery.description')}
        />
        <div className="gallery__button-group">
          {Object.keys(places).map(function (placeKey: string, i: number) {
            return (
              <Button
                // @ts-ignore
                label={places[placeKey]}
                style={{
                  color: placeKey === place ? '#fff' : '#6D6D6D',
                  backgroundColor: placeKey === place ? '#6D6D6D' : 'unset',
                  borderColor: '#6D6D6D',
                  marginBottom: '10px',
                }}
                size="lg"
                onClick={() => changePlace(placeKey)}
              />
            );
          })}
        </div>

        <div className="gallery__container">
          <div className="gallery__image-container">
            {[...Array(9)].map((x, i) => (
              <img
                src={`http://localhost:3333/api/assets/${place}/${i}.webp`}
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
