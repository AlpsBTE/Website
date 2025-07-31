/* eslint-disable*/
import './application.scss';
import { PageTitle } from '@alpsbte/shared/components';
import { languageStore } from '@alpsbte/shared/stores';
import { inject, observer } from 'mobx-react';
import ApplicationStep from '../components/application-step/application-step';
import { tr } from '@alpsbte/shared/language';

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
        <div className="application__content">
          <ApplicationStep
            stepNumber={1}
            title={tr('pages.application.steps.discord.title')}
            description={tr('pages.application.steps.discord.description')}
          />
          <ApplicationStep
            stepNumber={2}
            title={tr('pages.application.steps.tutorialSystem.title')}
            description={tr(
              'pages.application.steps.tutorialSystem.description'
            )}
          />
          <ApplicationStep
            stepNumber={3}
            title={tr('pages.application.steps.plotSystem.title')}
            description={tr('pages.application.steps.plotSystem.description')}
          />
          <ApplicationStep
            stepNumber={4}
            title={tr('pages.application.steps.applicationForm.title')}
            description={tr(
              'pages.application.steps.applicationForm.description'
            )}
          />
          <div className="application__video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/MdFMsJ9pNls"
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
