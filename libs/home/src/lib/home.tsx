import './home.scss';
import { Button, Header, HeaderProps } from '@alpsbte/shared/components';
import HomeContentSection from '../components/home-content-section/home-content-section';

/* eslint-disable-next-line */
export interface HomeProps {}

const headerProps: HeaderProps = {
  headerIcon:
    'https://yt3.ggpht.com/ytc/AKedOLQ5MRqFQDZEnX4QQZZbtYh_dqp680D-an9ZIfTM=s900-c-k-c0x00ffffff-no-rj',
  forceColor: false,
  headerText: 'Alps BTE',
  navItems: [
    { text: 'About Us', to: '/aboutUs' },
    { text: 'Gallery', to: '/gallery' },
    { text: 'Downloads', to: '/downloads' },
    { text: 'FAQ', to: '/faq' },
    { text: 'Application', to: '/application' },
    { text: 'Contact', to: '/contact' },
  ],
};
export function Home(props: HomeProps) {
  return (
    <>
      <Header {...headerProps}></Header>
      <div className="heading">
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
