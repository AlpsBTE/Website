/* eslint-disable */
import './home.scss';
import { Button, Header, HeaderProps } from '@alpsbte/shared/components';
import HomeContentSection from '../components/home-content-section/home-content-section';

export interface HomeProps {}

export function Home(props: HomeProps) {
  return (

   <>
      <Header {...headerProps}></Header>
      <div className="home__heading">
        <header>
      <div className="home__block">
            <h1 className="home__head-line">Recreating Our Countries in Minecraft</h1>
            <div className="home__buttons">
          <Button label="Join us" size="lg" color="#fff" center marginTop="5vh"/>
          <Button label="IP: mc.alps-bte.com" size="lg" color="#fff" center marginTop="3vh"/>
            </div>
          </div>
          </header>
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
