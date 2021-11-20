/* eslint-disable */
import './faq.scss';
import { PageTitle } from '@alpsbte/shared/components';
import Accordeon from '../components/accordeon/accordeon';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { tr } from '@alpsbte/shared/language';

export interface FaqProps {}

export const Faq: React.FC = inject(languageStore.storeKey)(
  observer(({}: FaqProps) => {
    // for some rason string[] is not working. Using any instead
    const FaqData: any = tr('pages.faq.questions');

    return (
      <div>
        <PageTitle
          title={tr('pages.faq.title')}
          subtitle={tr('pages.faq.description')}
        />

        {FaqData.map((faqItem: any, i: number) => (
          <Accordeon
            title={faqItem.title}
            key={i}
            content={faqItem.content}
          ></Accordeon>
        ))}
      </div>
    );
  })
);

export default Faq;
