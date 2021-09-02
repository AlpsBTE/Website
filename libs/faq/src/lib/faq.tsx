/* eslint-disable */
import './faq.scss';
import { PageTitle } from '@alpsbte/shared/components';
import Accordeon from '../components/accordeon/accordeon';

export interface FaqProps {}

export function Faq(props: FaqProps) {
  const FaqData = [
    {
      title: 'Titel',
      content: 'content',
    },
    {
      title: 'Titel',
      content: 'content',
    },
    {
      title: 'Titel',
      content: 'content',
    },
    {
      title: 'Titel',
      content: 'content',
    },
    {
      title: 'Titel',
      content: 'content',
    },
    {
      title: 'Titel',
      content: 'content',
    },
  ];
  return (
    <div>
      <PageTitle
        title="FAQ"
        subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
      />
      {FaqData.map((faqItem) => (
        <Accordeon title={faqItem.title} content={faqItem.content}></Accordeon>
      ))}
    </div>
  );
}

export default Faq;
