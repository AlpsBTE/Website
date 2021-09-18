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
            title="Application"
            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
          />
        </div>
        <div className="application__content">
          <ApplicationStep
            stepNumber={1}
            title={tr('pages.application.steps.discord.title')}
            description={tr('pages.application.steps.discord.description')}
            img={
              'https://cdn.discordapp.com/attachments/702818655750193152/881594516698726450/2021-08-29_19.04.45.png'
            }
          />
          <ApplicationStep
            stepNumber={2}
            title={tr('pages.application.steps.plotSystem.title')}
            description={tr('pages.application.steps.plotSystem.description')}
            img={
              'https://cdn.discordapp.com/attachments/702818655750193152/881594516698726450/2021-08-29_19.04.45.png'
            }
          />
          <ApplicationStep
            stepNumber={3}
            title={tr('pages.application.steps.applicationForm.title')}
            description={tr(
              'pages.application.steps.applicationForm.description'
            )}
            img={
              'https://cdn.discordapp.com/attachments/702818655750193152/881594516698726450/2021-08-29_19.04.45.png'
            }
          />
          <ApplicationStep
            stepNumber={4}
            title={tr('pages.application.steps.becomingBuilder.title')}
            description={tr(
              'pages.application.steps.becomingBuilder.description'
            )}
            img={
              'https://cdn.discordapp.com/attachments/702818655750193152/881594516698726450/2021-08-29_19.04.45.png'
            }
          />
        </div>
      </>
    );
  })
);

export default Application;
