import styles from './index.module.scss';
import { Button, Text, Avatar } from '@nextui-org/react';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface AuthProps {}

export function Auth(props: AuthProps) {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <img
          src="https://avatars.githubusercontent.com/u/64229767"
          className={styles.img}
        ></img>
        <p className={styles.pretitle}>Alps-BTE</p>
        <h1 className={styles.title}>Welcome to SPIKE</h1>
        <Button className={styles.button}>Login with Discord</Button>
      </div>
    </div>
  );
}

export default Auth;
