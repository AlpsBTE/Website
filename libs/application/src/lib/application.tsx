/* eslint-disable*/
import './application.scss';
import { PageTitle } from '@alpsbte/shared/components';
import { languageStore } from '@alpsbte/shared/stores';
import { inject, observer } from 'mobx-react';
import ApplicationStep from '../components/application-step/application-step';
import { tr } from '@alpsbte/shared/language';
import { apiUrl } from '@alpsbte/shared/config';

export interface ApplicationProps {}

export const Application = inject(languageStore.storeKey)(
  observer(({}: ApplicationProps) => {
    return (
      <>
        <div className="application">
          <PageTitle
            title={tr('pages.application.title')}
            subtitle={tr('pages.application.description')}
          />
        </div>
        <script async defer data-website-id="f93f1f05-dd86-45ad-ad19-ee57f6c5b74b" src="https://www.alps-bte.com/webstats/umami.js"></script>
        <div className="application__content">
          <ApplicationStep
            stepNumber={1}
            title={tr('pages.application.steps.discord.title')}
            description={tr('pages.application.steps.discord.description')}
            img={`${apiUrl}/api/assets/application/2.webp`}
          />
          <ApplicationStep
            stepNumber={2}
            title={tr('pages.application.steps.plotSystem.title')}
            description={tr('pages.application.steps.plotSystem.description')}
            img={`${apiUrl}/api/assets/application/0.webp`}
          />
          <ApplicationStep
            stepNumber={3}
            title={tr('pages.application.steps.applicationForm.title')}
            description={tr(
              'pages.application.steps.applicationForm.description'
            )}
            img={`${apiUrl}/api/assets/application/3.webp`}
          />
          <ApplicationStep
            stepNumber={4}
            title={tr('pages.application.steps.becomingBuilder.title')}
            description={tr(
              'pages.application.steps.becomingBuilder.description'
            )}
            img={`${apiUrl}/api/assets/application/1.webp`}
          />
          <div className="application__video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/zeX3rRKJenw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </>
    );
  })
);

export default Application;
