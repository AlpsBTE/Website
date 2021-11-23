/* eslint-disable*/
import { ROUTES } from '@alpsbte/router';
import { PageTitle } from '@alpsbte/shared/components';
import { tr } from '@alpsbte/shared/language';
import { languageStore } from '@alpsbte/shared/stores';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { Link } from 'react-router-dom';

import './about-us.scss';

export interface AboutUsProps {}

export const AboutUs = inject(languageStore.storeKey)(
  observer(({}: AboutUsProps) => {
    const aboutUsData: string[] = tr(
      'pages.aboutUs.description'
    ) as unknown as string[];

    return (
      <div className="about-us">
        <PageTitle title={tr('pages.aboutUs.title')} />
        <Link
          to={`/${languageStore.language}/${ROUTES.contact}`}
          className="about-us__contact-us"
        >
          <span>{tr('pages.aboutUs.contactUs')}</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
        <div className="about-us__container">
          {aboutUsData.map((aboutUsItem: any, i: number) => (
            <React.Fragment>
              <h2>{aboutUsItem.title}</h2>
              
              <p>{aboutUsItem.description}</p>
            </React.Fragment>
          ))}
          <div className="about-us__container__image-container">
            <img
              className="about-us__container__image-container__image"
              src="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
              alt="about us"
            />
            <img
              className="about-us__container__image-container__image"
              src="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
              alt="about us"
            />
            <img
              className="about-us__container__image-container__image"
              src="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
              alt="about us"
            />
          </div>
        </div>
      </div>
    );
  })
);

export default AboutUs;
