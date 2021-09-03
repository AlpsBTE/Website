/* eslint-disable*/
import { Button } from '@alpsbte/shared/components';
import { PageTitle } from '@alpsbte/shared/components';

import './about-us.scss';

export interface AboutUsProps {}

export function AboutUs(props: AboutUsProps) {
  return (
    <div>
      <PageTitle
        title="Press"
        subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
      />

      <p className="aboutus__text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>

      <Button label="Contact us" />

      <div className="aboutus_image-container">
        <div className="aboutus_image-container">
          <img className="aboutus_image" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
