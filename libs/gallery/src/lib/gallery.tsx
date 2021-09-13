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
    </div>
  );
}

export default Gallery;
