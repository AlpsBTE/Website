import './press.scss';
import { PageTitle } from '@alpsbte/shared/components';
import PressImage from './press-image/press-image';

/* eslint-disable-next-line */
export interface PressProps {}

export function Press() {
  return (
    <div>
      <PageTitle
        title="Press"
        subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
      />
      <div className="press__icons">
        <PressImage
          src="http://localhost:4200/logo.78f6531.png"
          redirect="https://google.com"
        />
        <PressImage
          src="http://localhost:4200/logo.78f6531.png"
          redirect="https://google.com"
        />
        <PressImage
          src="http://localhost:4200/logo.78f6531.png"
          redirect="https://google.com"
        />
        <PressImage
          src="http://localhost:4200/logo.78f6531.png"
          redirect="https://google.com"
        />
      </div>
    </div>
  );
}

export default Press;
