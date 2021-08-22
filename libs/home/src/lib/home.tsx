import './home.module.scss';
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
      <Button label="Text" />
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
      <h1>Welcome to Home!</h1>
    </>
  );
}

export default Home;
