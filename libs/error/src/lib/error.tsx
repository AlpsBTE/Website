/* eslint-disable */
import './error.scss';
import { PageTitle } from '@alpsbte/shared/components';
import { languageStore } from '@alpsbte/shared/stores';
import { inject, observer } from 'mobx-react';
import { tr } from '@alpsbte/shared/language';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export interface ErrorProps {}

export const Error = inject(languageStore.storeKey)(
  observer(({}: ErrorProps) => {
    return (
      <div className="error-page">
        <PageTitle
          title={tr('pages.error.title')}
          subtitle={tr('pages.error.description')}
          image="https://i.imgur.com/qTC69pF.png"
          className="error-page__page-title"
        />
        <script
          async
          defer
          data-website-id="f93f1f05-dd86-45ad-ad19-ee57f6c5b74b"
          src="https://www.alps-bte.com/webstats/umami.js"
        ></script>
        <div className="error-page__content">
          <Link
            to={`/${languageStore.language}`}
            className="error-page__content__back-home"
          >
            <img
              src="https://www.nicepng.com/png/full/231-2315420_portal-to-hell-minecraft-wiki-minecraft-nether-portal.png"
              alt="nether portal"
            />
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>{tr('pages.error.backHome')}</span>
          </Link>
        </div>
      </div>
    );
  })
);

export default Error;
