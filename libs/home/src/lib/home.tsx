/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './home.scss';
import { Button } from '@alpsbte/shared/components';
import HomeContentSection from '../components/home-content-section/home-content-section';
import { inject, observer } from 'mobx-react';
import { languageStore } from '@alpsbte/shared/stores';
import { tr } from '@alpsbte/shared/language';
import { ScrollIndicator } from '@alpsbte/shared/components';
import { scrollLinks, server } from '@alpsbte/shared/config';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export interface HomeProps {}

export const Home: React.FC<HomeProps> = inject(languageStore.storeKey)(
  observer(({}: HomeProps) => {
    const [offsetY, setOffsetY] = useState(0);
    const scrollEvent = () => {
      setOffsetY(window.pageYOffset);
    };

    const componentDidMount = () => {
      window.addEventListener('scroll', scrollEvent);
    };
    const componentWillUnmount = () => {
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
          style={{ backgroundPositionY: `${offsetY * 0.5}px` }}
        >
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
                />
                <Button
                  label={`${server.address}`}
                  size="lg"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '3vh',
                  }}
                />
              </div>
            </div>
            <ScrollIndicator />
          </div>
        </div>
        <div className="home__content" id={`${scrollLinks.ourMission}`}>
          <HomeContentSection
            title={tr('pages.home.contentBlocks.mission.title')}
            image="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
            isImageAlignedLeft={true}
          >
            {tr('pages.home.contentBlocks.mission.description')}
          </HomeContentSection>
          <HomeContentSection
            title={tr('pages.home.contentBlocks.server.title')}
            image="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
            isImageAlignedLeft={false}
          >
            {tr('pages.home.contentBlocks.server.description')}
          </HomeContentSection>
          <HomeContentSection
            title={tr('pages.home.contentBlocks.how.title')}
            image="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
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
