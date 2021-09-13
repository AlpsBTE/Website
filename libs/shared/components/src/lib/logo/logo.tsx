import { CSSProperties } from 'react';
import './logo.scss';

import logo from '../shared/assets/logo.png';

export interface LogoProps {
  style?: CSSProperties;
}

export const Logo = ({ style = {} }: LogoProps) => {
  return <img className="logo" src={logo} alt="Alps BTE Logo" style={style} />;
};

export default Logo;
