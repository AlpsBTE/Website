/* eslint-disable*/
import './gallery.scss';
import { PageTitle } from '@alpsbte/shared/components';

export interface GalleryProps {}

export function Gallery(props: GalleryProps) {
  return (
    <div>
      <PageTitle
        title="Gallery"
        subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
      />
      <div className="gallery__container">
        <div className="gallery__image-container">
          <img
            src="https://via.placeholder.com/300x200/"
            className="gallery__image"
          ></img>
          <img
            src="https://via.placeholder.com/300x200/"
            className="gallery__image"
          ></img>
          <img
            src="https://via.placeholder.com/300x200/"
            className="gallery__image"
          ></img>
          <img
            src="https://via.placeholder.com/300x200/"
            className="gallery__image"
          ></img>
          <img
            src="https://via.placeholder.com/300x200/"
            className="gallery__image"
          ></img>
          <img
            src="https://via.placeholder.com/300x200/"
            className="gallery__image"
          ></img>
          <img
            src="https://via.placeholder.com/300x200/"
            className="gallery__image"
          ></img>
          <img
            src="https://via.placeholder.com/300x200/"
            className="gallery__image"
          ></img>
          <img
            src="https://via.placeholder.com/300x200/"
            className="gallery__image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
