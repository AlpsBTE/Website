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
import { socials } from '@alpsbte/shared/config';
import { languageStore } from '@alpsbte/shared/stores';
import { observer } from 'mobx-react-lite';
import { inject } from 'mobx-react';
import { tr } from '@alpsbte/shared/language';

// Es wird erst über die texte gemapped sobald das backend da ist
export interface ContactProps {}

export const Contact = inject(languageStore.storeKey)(
  observer(({}: ContactProps) => {
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
                <h2></h2>
                <p>
                  Gartensocke
                  <br />
                  Email{' '}
                  <a className="link" href="mailto:gartensocke@alps-bte.com">
                    gartensocke@alps-bte.com
                  </a>
                  <br />
                  Discord{' '}
                  <a className="link" href="https://discord.com/invite/vgkspay">
                    Gartensocke#1525
                  </a>
                </p>
              </div>
              <div className="contact__people__container">
                <h2>Outreach</h2>
                <p>
                  Gartensocke
                  <br />
                  Email{' '}
                  <a className="link" href="mailto:gartensocke@alps-bte.com">
                    gartensocke@alps-bte.com
                  </a>
                  <br />
                  Discord{' '}
                  <a className="link" href="https://discord.com/invite/vgkspay">
                    Gartensocke#1525
                  </a>
                </p>
              </div>
              <div className="contact__people__container">
                <h2>Outreach</h2>
                <p>
                  Gartensocke
                  <br />
                  Email{' '}
                  <a className="link" href="mailto:gartensocke@alps-bte.com">
                    gartensocke@alps-bte.com
                  </a>
                  <br />
                  Discord{' '}
                  <a className="link" href="https://discord.com/invite/vgkspay">
                    Gartensocke#1525
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
);

export default Contact;
