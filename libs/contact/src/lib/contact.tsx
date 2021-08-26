/* eslint-disable*/
import './contact.scss';
import { PageTitle } from '@alpsbte/shared/components';

export interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <div className="contact">
      <PageTitle title="Contact" subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren," />

      <div className="contact__container">

        <div className="contact__social-media">
          <h2>Social Media</h2>
          <div className="contact__social-icons">
            <div className="contact__icon"></div>
            <div className="contact__icon"></div>
            <div className="contact__icon"></div>
            <div className="contact__icon"></div>
            <div className="contact__icon"></div>
            <div className="contact__icon"></div>
    
          </div>
        </div>

        <div className="contact__outreach">
          Mensch
        </div>

      </div>
    </div>
  );
}

export default Contact;
