import './home.module.scss';
import { Header, HeaderProps } from '@alpsbte/shared/components';
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
    <div>
      <Header {...headerProps}></Header>
      <h1>Welcome to Home!</h1>
    </div>
  );
}

export default Home;
