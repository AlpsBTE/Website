import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable-next-line */
import { ROUTES } from '@alpsbte/router';
import './header.scss';
import AnimateHeight from 'react-animate-height';
import logo from '../shared/assets/logo.png';
import { languageStore } from '@alpsbte/shared/stores';
import { inject, observer } from 'mobx-react';
import { LanguageEnum } from '@alpsbte/shared/language';

interface NavItems {
  text: string;
  to: string;
}
export interface HeaderProps {
  headerText: string;
  mobileBreakpoint: number;
  navItems: NavItems[];
  forceColor: boolean;
}

export const Header = inject(languageStore.storeKey)(
  observer((props: HeaderProps) => {
    const [transparent, setTransparent] = useState<boolean>(true);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const burgerRef = useRef<HTMLDivElement>(null);

    const resizeEvent = () => {
      setWindowWidth(window.innerWidth);
    };

    const scrollEvent = () => {
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
    };

    const componentDidMount = () => {
      window.addEventListener('resize', resizeEvent);
      window.addEventListener('scroll', scrollEvent);
    };

    const componentWillUnmount = () => {
      window.removeEventListener('resize', resizeEvent);
      window.removeEventListener('scroll', scrollEvent);
    };

    useEffect(() => {
      componentDidMount();
      return componentWillUnmount;
    });

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
              <h1 style={{ color: transparent ? 'white' : 'black' }}>
                {props.headerText}
              </h1>
            </Link>
            <title>{props.headerText}</title>
          </div>
          <ul className="header__navitem-container">
            {props.navItems.map((_, key) => {
              return (
                <li key={key} className="header__navitem-container__item">
                  <Link
                    to={props.navItems[key].to}
                    style={{ color: transparent ? 'white' : 'black' }}
                  >
                    {props.navItems[key].text}
                  </Link>
                </li>
              );
            })}
            {/* building site - init */}
            <button
              onClick={() =>
                languageStore.language === LanguageEnum.de
                  ? languageStore.setLanguage(LanguageEnum.en)
                  : languageStore.setLanguage(LanguageEnum.de)
              }
            >
              Temporary Language Toggle
            </button>
            {/* building site - init */}
          </ul>
        </nav>
      );
    else
      return (
        <nav
          className={`header ${
            transparent && !props.forceColor ? 'transparent' : ''
          }`}
          style={{
            flexDirection: 'column',
            maxHeight: '1000px',
            height: 'auto',
          }}
        >
          <div className="header__upper-container">
            <div className="header__upper-container__image-container ">
              <Link to={`/${ROUTES.home}`}>
                <img src={logo} alt={props.headerText} />
                <h1 style={{ color: transparent ? 'white' : 'black' }}>
                  {props.headerText}
                </h1>
              </Link>
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
  })
);

export default Header;
