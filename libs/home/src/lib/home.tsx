/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './home.scss';
import { Button } from '@alpsbte/shared/components';
import HomeContentSection from '../components/home-content-section/home-content-section';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { tr } from '@alpsbte/shared/language';
import { ScrollIndicator } from '@alpsbte/shared/components';
import { scrollLinks, server, socials, apiUrl } from '@alpsbte/shared/config';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faCompass } from '@fortawesome/free-solid-svg-icons';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = inject(languageStore.storeKey)(
  observer(({}: HomeProps) => {
    const [offsetY, setOffsetY] = useState<number>(0);
    const [copiedClipboard, setCopiedClipboard] = useState<boolean>(false);

    const handleCopyClipboardClick = (): void => {
      if (!copiedClipboard) {
        setCopiedClipboard(true);
        setTimeout(() => setCopiedClipboard(false), 3000);
        navigator.clipboard.writeText(server.address);
      }
    };

    const scrollEvent = (): void => {
      if (window.innerWidth < 1000) {
        setOffsetY(0);
      } else {
        setOffsetY(window.pageYOffset);
      }
    };

    const componentDidMount = (): void => {
      window.addEventListener('scroll', scrollEvent);
    };
    const componentWillUnmount = (): void => {
      window.removeEventListener('scroll', scrollEvent);
    };

    useEffect(() => {
      componentDidMount();
      return componentWillUnmount;
    });

    return (
      <>
        <div
          className="heading"
          style={{
            backgroundPositionY: `${offsetY * 0.5}px`,
            backgroundImage: `url(${apiUrl}/api/assets/home/3.webp`,
            background: `linear-gradient(90deg, rgba(0,0,0,0.5) 100%, rgba(0,0,0,0.5) 100%), url(${apiUrl}/api/assets/home/3.webp)`,
            backgroundSize: 'cover',
          }}
        >
          <script
            async
            defer
            data-website-id="f93f1f05-dd86-45ad-ad19-ee57f6c5b74b"
            src="https://www.alps-bte.com/webstats/umami.js"
          ></script>
          <div className="home__hero block">
            <div className="head_line_box">
              <h1 className="head_line">{tr('pages.home.headline')}</h1>
              <div className="buttons">
                <Button
                  label={tr('pages.home.joinUs')}
                  size="lg"
                  icon={faDiscord}
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '5vh',
                  }}
                  link={socials.discord.link}
                />
                <Button
                  label={`${
                    !copiedClipboard
                      ? server.address
                      : tr('pages.home.copiedToClipboard')
                  }`}
                  size="lg"
                  icon={!copiedClipboard ? faCompass : faCheck}
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '3vh',
                  }}
                  onClick={() => handleCopyClipboardClick()}
                />
              </div>
            </div>
            <ScrollIndicator />
          </div>
        </div>
        <div className="home__content" id={`${scrollLinks.ourMission}`}>
          <HomeContentSection
            title={tr('pages.home.contentBlocks.mission.title')}
            image={`${apiUrl}/api/assets/home/1.webp`}
            isImageAlignedLeft={true}
            className="home__content__our-mission"
          >
            {tr('pages.home.contentBlocks.mission.description')}
          </HomeContentSection>
          <HomeContentSection
            title={tr('pages.home.contentBlocks.server.title')}
            image={`${apiUrl}/api/assets/home/0.webp`}
            isImageAlignedLeft={false}
          >
            {tr('pages.home.contentBlocks.server.description')}
          </HomeContentSection>
          <HomeContentSection
            title={tr('pages.home.contentBlocks.how.title')}
            image={`${apiUrl}/api/assets/home/2.webp`}
            isImageAlignedLeft={true}
          >
            {tr('pages.home.contentBlocks.how.description')}
          </HomeContentSection>
        </div>
      </>
    );
  })
);

export default Home;
