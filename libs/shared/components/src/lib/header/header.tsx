import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable-next-line */
import { ROUTES } from '@alpsbte/router';
import './header.scss';
import AnimateHeight from 'react-animate-height';
import logo from '../shared/assets/logo.png';

interface navItems {
  text: string;
  to: string;
}
export interface HeaderProps {
  headerText: string;
  mobileBreakpoint: number;
  navItems: navItems[];
  forceColor: boolean;
}

export function Header(props: HeaderProps) {
  const [transparent, setTransparent] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const burgerRef = useRef<HTMLDivElement>(null);
  window.addEventListener('scroll', () => {
    if (props.forceColor) return;

    if (showMenu) {
      setTransparent(false);
    } else {
      if (window.scrollY >= 100) {
        if (transparent) {
          setTransparent(false);
        }
      } else {
        if (!transparent) {
          setTransparent(true);
        }
      }
    }
  });

  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  if (burgerRef.current)
    burgerRef.current.onclick = () => {
      if (!showMenu) {
        setTransparent(false);
      } else if (window.scrollY <= 100) setTransparent(true);

      setShowMenu(!showMenu);
    };

  if (windowWidth >= props.mobileBreakpoint)
    return (
      <nav
        className={`header ${
          transparent && !props.forceColor ? 'transparent' : ''
        }`}
      >
        <div className="header__image-container ">
          <Link to={`/${ROUTES.home}`}>
            <img src={logo} alt={props.headerText} />
          </Link>
          <title>{props.headerText}</title>
        </div>
        <ul className="header__navitem-container">
          {props.navItems.map((_, key) => {
            return (
              <li key={key} className="header__navitem-container__item">
                <Link to={props.navItems[key].to}>
                  {props.navItems[key].text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  else
    return (
      <nav
        className={`header ${
          transparent && !props.forceColor ? 'transparent' : ''
        }`}
        style={{ flexDirection: 'column', maxHeight: '1000px', height: 'auto' }}
      >
        <div className="header__upper-container">
          <div className="header__upper-container__image-container ">
            <img src={logo} alt={props.headerText} />
            <h1 style={{ color: transparent ? 'white' : 'black' }}>
              {props.headerText}
            </h1>
          </div>
          <div className="header__upper-container__burger_container">
            <div
              id="nav-icon1"
              ref={burgerRef}
              className={`${showMenu ? 'open' : ''}`}
            >
              <span
                style={{ backgroundColor: transparent ? 'white' : 'black' }}
              ></span>
              <span
                style={{ backgroundColor: transparent ? 'white' : 'black' }}
              ></span>
              <span
                style={{ backgroundColor: transparent ? 'white' : 'black' }}
              ></span>
            </div>
          </div>
        </div>
        <ul className="header__lower-container__navitem-container">
          <AnimateHeight duration={350} height={showMenu ? 'auto' : 0}>
            {props.navItems.map((_, key) => {
              return (
                <li
                  key={key}
                  className="header__lower-container__navitem-container__item"
                >
                  <Link
                    onClick={() => setShowMenu(false)}
                    to={props.navItems[key].to}
                  >
                    {props.navItems[key].text}
                  </Link>
                </li>
              );
            })}
          </AnimateHeight>
        </ul>
      </nav>
    );
}

export default Header;
