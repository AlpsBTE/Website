/* eslint-disable */
import './faq.scss';
import { PageTitle } from '@alpsbte/shared/components';
import Accordeon from '../components/accordeon/accordeon';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { tr } from '@alpsbte/shared/language';
import React, { useState } from 'react';

export interface FaqProps {}

export const Faq: React.FC = inject(languageStore.storeKey)(
  observer(({}: FaqProps) => {
    const FaqData: string[] = tr('pages.faq.questions') as unknown as string[];

    const [faqHanler, setFaqHanler] = useState(0); // add id, then close all faq's exept this
    

    return (
      <div className="faq">
        <PageTitle
          title={tr('pages.faq.title')}
          subtitle={tr('pages.faq.description')}
        />

        {FaqData.map((faqItem: any, i: number) =>
          faqItem.title != null ? (
            <Accordeon
              title={faqItem.title}
              key={i}
              content={faqItem.content}
            ></Accordeon>
          ) : (
            <h2 className="faq__spacer">{faqItem.spacer}</h2>
          )
        )}
      </div>
    );
  })
);

export default Faq;
