/* eslint-disable*/
import { Button } from '@alpsbte/shared/components';
import { PageTitle } from '@alpsbte/shared/components';

import './about-us.scss';

export interface AboutUsProps {}

export const AboutUs = ({}: AboutUsProps) => {
  return (
    <div>
      <PageTitle
        title="About us"
        subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      />
      <Button
        label="Contact Us"
        size="md"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      />
      <div className="aboutus__image-container">
        <img
          className="aboutus__image"
          src="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
        />
        <img
          className="aboutus__image"
          src="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
        />
        <img
          className="aboutus__image"
          src="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
        />
      </div>
    </div>
  );
};

export default AboutUs;
