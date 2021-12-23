import { CSSProperties } from 'react';
import './logo.scss';
import { apiUrl } from '@alpsbte/shared/config';

export interface LogoProps {
  style?: CSSProperties;
}

export const Logo = ({ style = {} }: LogoProps) => {
  return <img className="logo" src={`${apiUrl}/api/assets/logo/0.webp`} alt="Alps BTE Logo" style={style}/>;
};

export default Logo;
