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

// Es wird erst über die texte gemapped sobald das backend da ist
export interface ContactProps {}

export const Contact = ({}: ContactProps) => {
  return (
    <div className="contact">
      <PageTitle
        title="Contact"
        subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,"
      />

      <div className="contact__container">
        <div className="contact__social-media">
          <h2 className="contact__title-font">Social Media</h2>
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
              <h2 className="contact__title-font">Outreach</h2>
              <p>Gartensocke</p>
              <p>
                Email{' '}
                <a className="link" href="mailto:gartensocke@alps-bte.com">
                  gartensocke@alps-bte.com
                </a>
              </p>
              <p>
                Discord{' '}
                <a className="link" href="https://discord.com/invite/vgkspay">
                  Gartensocke#1525
                </a>
              </p>
            </div>
            <div className="contact__people__container">
              <h2 className="contact__title-font">Outreach</h2>
              <p>Gartensocke</p>
              <p>
                Email{' '}
                <a className="link" href="mailto:gartensocke@alps-bte.com">
                  gartensocke@alps-bte.com
                </a>
              </p>
              <p>
                Discord{' '}
                <a className="link" href="https://discord.com/invite/vgkspay">
                  Gartensocke#1525
                </a>
              </p>
            </div>
            <div className="contact__people__container">
              <h2 className="contact__title-font">Outreach</h2>
              <p>Gartensocke</p>
              <p>
                Email{' '}
                <a className="link" href="mailto:gartensocke@alps-bte.com">
                  gartensocke@alps-bte.com
                </a>
              </p>
              <p>
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
};

export default Contact;
