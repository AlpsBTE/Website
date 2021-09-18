/* eslint-disable*/
import './contact.scss';
import { PageTitle } from '@alpsbte/shared/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faTiktok,
  faReddit,
} from '@fortawesome/free-brands-svg-icons';
import { contact, IStaff, socials, StaffRole } from '@alpsbte/shared/config';
import { languageStore } from '@alpsbte/shared/stores';
import { observer } from 'mobx-react-lite';
import { inject } from 'mobx-react';
import { tr } from '@alpsbte/shared/language';

// Es wird erst über die texte gemapped sobald das backend da ist
export interface ContactProps {}

export const Contact = inject(languageStore.storeKey)(
  observer(({}: ContactProps) => {
    const renderContact = (contact: IStaff) => (
      <p>
        {contact.displayName}
        <br />
        {contact.email && (
          <>
            Email{' '}
            <a
              className="link"
              href={`mailto:${contact.email}`}
              target="_blank"
              rel="noreferrer"
            >
              {contact.email}
            </a>
          </>
        )}
        <br />
        {socials.discord.text}{' '}
        <a
          className="link"
          href={`${socials.discord.link}`}
          target="_blank"
          rel="noreferrer"
        >
          {contact.discordUsername}
        </a>
      </p>
    );

    return (
      <div className="contact">
        <PageTitle
          title={tr('pages.contact.title')}
          subtitle={tr('pages.contact.description')}
        />

        <div className="contact__container">
          <div className="contact__social-media">
            <h2 className="contact__title-font">
              {tr('pages.contact.socialMedia')}
            </h2>
            <div className="contact__social-icons">
              <a
                href={socials.instagram.link}
                target="_blank"
                rel="noreferrer"
                className="contact__social-media__icon"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href={socials.youtube.link}
                target="_blank"
                rel="noreferrer"
                className="contact__social-media__icon"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a
                href={socials.reddit.link}
                target="_blank"
                rel="noreferrer"
                className="contact__social-media__icon"
              >
                <FontAwesomeIcon icon={faReddit} size="lg" />
              </a>
              <a
                href={socials.twitter.link}
                target="_blank"
                rel="noreferrer"
                className="contact__social-media__icon"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href={socials.tiktok.link}
                target="_blank"
                rel="noreferrer"
                className="contact__social-media__icon"
              >
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </div>
          </div>
          <div className="contact__people">
            <div>
              <div className="contact__people__container">
                <h2>{tr('pages.contact.contact.outreach')}</h2>
                {renderContact(contact.gartensocke)}
              </div>
              <div className="contact__people__container">
                <h2>{tr('pages.contact.contact.community')}</h2>
                {renderContact(contact.napartas)}
              </div>
              <div className="contact__people__container">
                <h2>{tr('pages.contact.contact.management')}</h2>
                {renderContact(contact.cinnazeyy)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
);

export default Contact;
