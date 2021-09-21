/* eslint-disable*/
import './gallery.scss';
import { PageTitle } from '@alpsbte/shared/components';
import { useState } from 'react';

export interface GalleryProps {}

export function Gallery(props: GalleryProps) {
  const [city, changeCity] = useState(0);
  const cities = ['bern', 'basel', 'zurich', 'wien'];

  function forward() {
    changeCity(city + 1);
  }
  function backward() {
    changeCity(city - 1);
  }

  return (
    <div>
      <PageTitle
        title="Gallery"
        subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
      />
      <button
        onClick={forward}
        disabled={city == cities.length - 1 ? true : false}
      >
        +
      </button>
      <p>{cities[city]}</p>
      <button onClick={backward} disabled={city == 0 ? true : false}>
        -
      </button>
      <div className="gallery__container">
        <div className="gallery__image-container">
          <img
            src={'https://picsum.photos/id/' + city + '/300/200'}
            className="gallery__image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
