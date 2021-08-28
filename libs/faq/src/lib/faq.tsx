/* eslint-disable */
import './faq.scss';
import { PageTitle } from '@alpsbte/shared/components';

export interface FaqProps {}

export function Faq(props: FaqProps) {
  return (
    <div>
     <PageTitle title="FAQ" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"/>
    </div>
  );
}

export default Faq;
