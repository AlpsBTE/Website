/* eslint-disable*/
import './contact.module.scss';
import { PageTitle } from '@alpsbte/shared/components';

export interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <div>
       <PageTitle title="Contact" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"/>
    </div>
  );
}

export default Contact;
