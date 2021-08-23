import './home.scss';
import { Button, Header, HeaderProps } from '@alpsbte/shared/components';
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
//test
export function Home(props: HomeProps) {
  const test = new Array(100);
  return (
   <>
      <Header {...headerProps}></Header>
    <div className="home__heading">
      <div className="home__block">
            <h1 className="home__head_line">Recreating Our Countries in Minecraft</h1>
            <div className="buttons">
          <Button label="Join us" size="lg" color="#fff" />
          <Button label="IP: mc.alps-bte.com" size="lg" color="#fff" />
            </div>
          
      </div>
    </div>
    </>
  );
}

export default Home;
