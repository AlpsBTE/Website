/* eslint-disable */
import './home.scss';
import { Button, Header, HeaderProps } from '@alpsbte/shared/components';
import HomeContentSection from '../components/home-content-section/home-content-section';

import { useState, useEffect } from 'react';
import { transcode } from 'buffer';

export interface HomeProps {}

export function Home(props: HomeProps) {
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
        <div className="block">
          <div className="head_line_box">
            <h1 className="head_line">Recreating Our Countries in Minecraft</h1>
            <div className="buttons">
              <Button label="Join us" size="lg" color="#fff" />
              <Button label="IP: mc.alps-bte.com" size="lg" color="#fff" />
            </div>
          </div>
        </div>
      </div>
      <HomeContentSection
        title="Title"
        alignment="center"
        image="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
      >
        Lorem Impsum dolor sit amet ding dong das theos doean ejal ndian doedn
        djse desjd neoand doe Lorem Impsum dolor sit amet ding dong das theos
        doean ejal ndian doedn djse desjd neoand doe Lorem Impsum dolor sit amet
        ding dong das theos doean ejal ndian doedn djse desjd neoand doe Lorem
        Impsum dolor sit amet ding dong das theos doean ejal ndian doedn djse
        desjd neoand doe
      </HomeContentSection>
      <HomeContentSection
        title="Title"
        alignment="center"
        image="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
      >
        Lorem Impsum dolor sit amet ding dong das theos doean ejal ndian doedn
        djse desjd neoand doe Lorem Impsum dolor sit amet ding dong das theos
        doean ejal ndian doedn djse desjd neoand doe Lorem Impsum dolor sit amet
        ding dong das theos doean ejal ndian doedn djse desjd neoand doe Lorem
        Impsum dolor sit amet ding dong das theos doean ejal ndian doedn djse
        desjd neoand doe
      </HomeContentSection>
      <HomeContentSection
        title="Title"
        alignment="center"
        image="https://alps-bte.com/img/user_buildings_showcase/jesuitenkirche.png"
      >
        Lorem Impsum dolor sit amet ding dong das theos doean ejal ndian doedn
        djse desjd neoand doe Lorem Impsum dolor sit amet ding dong das theos
        doean ejal ndian doedn djse desjd neoand doe Lorem Impsum dolor sit amet
        ding dong das theos doean ejal ndian doedn djse desjd neoand doe Lorem
        Impsum dolor sit amet ding dong das theos doean ejal ndian doedn djse
        desjd neoand doe
      </HomeContentSection>
    </>
  );
}

export default Home;
