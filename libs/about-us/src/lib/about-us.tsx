/* eslint-disable*/
import { Route, Link } from 'react-router-dom';
import { PageTitle } from '@alpsbte/shared/components';

import './about-us.module.scss';

export interface AboutUsProps {}

export function AboutUs(props: AboutUsProps) {
  return (
    <div>
      <PageTitle title="Press" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"/>

    </div>
  );
}

export default AboutUs;
