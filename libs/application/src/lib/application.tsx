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
            img={'http://localhost:3333/api/assets/application/2.png'}
          />
          <ApplicationStep
            stepNumber={2}
            title={tr('pages.application.steps.plotSystem.title')}
            description={tr('pages.application.steps.plotSystem.description')}
            img={'http://localhost:3333/api/assets/application/0.png'}
          />
          <ApplicationStep
            stepNumber={3}
            title={tr('pages.application.steps.applicationForm.title')}
            description={tr(
              'pages.application.steps.applicationForm.description'
            )}
            img={'http://localhost:3333/api/assets/application/3.png'}
          />
          <ApplicationStep
            stepNumber={4}
            title={tr('pages.application.steps.becomingBuilder.title')}
            description={tr(
              'pages.application.steps.becomingBuilder.description'
            )}
            img={'http://localhost:3333/api/assets/application/1.png'}
          />
        </div>
      </>
    );
  })
);

export default Application;
