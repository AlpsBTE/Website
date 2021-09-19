/* eslint-disable*/
import { ROUTES } from '@alpsbte/router';
import { Button } from '@alpsbte/shared/components';
import { PageTitle } from '@alpsbte/shared/components';
import { tr } from '@alpsbte/shared/language';
import { languageStore } from '@alpsbte/shared/stores';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import './about-us.scss';

export interface AboutUsProps {}

export const AboutUs = inject(languageStore.storeKey)(
  observer(({}: AboutUsProps) => {
    return (
      <div className="about-us">
        <PageTitle
          title={tr('pages.aboutUs.title')}
          subtitle={tr('pages.aboutUs.description')}
        />
        <Link
          to={`/${languageStore.language}/${ROUTES.contact}`}
          className="about-us__contact-us"
        >
          <span>{tr('pages.aboutUs.contactUs')}</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <div className="about-us__container">
          <img
            className="about-us__container__image"
            src="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
          />
          <img
            className="about-us__container__image"
            src="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
          />
          <img
            className="about-us__container__image"
            src="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
          />
        </div>
      </div>
    );
  })
);

export default AboutUs;
