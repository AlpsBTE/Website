import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable-next-line */
import { ROUTES } from '@alpsbte/router';
import './header.scss';
import AnimateHeight from 'react-animate-height';
import { languageStore } from '@alpsbte/shared/stores';
import { inject, observer } from 'mobx-react';
import LanguageSelect from '../language-select/language-select';
import { Logo } from '../..';

interface NavItem {
  text: string;
  to: string;
}

export interface HeaderProps {
  headerText: string;
  mobileBreakpoint: number;
  navItems: NavItem[];
  forceColor: boolean;
}

export const Header = inject(languageStore.storeKey)(
  observer(
    ({ headerText, mobileBreakpoint, navItems, forceColor }: HeaderProps) => {
      const scrollBreakpoint = 100 as const;
      const [transparent, setTransparent] = useState<boolean>(true);
      const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
      const [showMenu, setShowMenu] = useState<boolean>(false);

      const burgerRef = useRef<HTMLDivElement>(null);

      const resizeEvent = () => {
        setWindowWidth(window.innerWidth);
      };

      const scrollEvent = () => {
        if (forceColor) return;

        if (showMenu) {
          setTransparent(false);
        } else {
          if (window.scrollY >= scrollBreakpoint) {
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
          } else if (window.scrollY <= scrollBreakpoint) setTransparent(true);

          setShowMenu(!showMenu);
        };

      return windowWidth >= mobileBreakpoint ? (
        <nav
          className={`header ${
            transparent && !forceColor ? 'transparent' : ''
          }`}
        >
          <div className="header__image-container ">
            <script
              data-host="https://microanalytics.io"
              data-dnt="false"
              src="https://microanalytics.io/js/script.js"
              id="ZwSg9rf6GA"
              async
              defer
            ></script>
            <Link to={`/${ROUTES.home}`}>
              <Logo />
              <h1 style={{ color: transparent ? 'white' : 'black' }}>
                {headerText}
              </h1>
            </Link>
            <title>{headerText}</title>
          </div>
          <ul className="header__navitem-container">
            {navItems.map((_, key) => {
              return (
                <li key={key} className="header__navitem-container__item">
                  <Link
                    to={`/${navItems[key].to}`}
                    style={{ color: transparent ? 'white' : 'black' }}
                  >
                    {navItems[key].text}
                  </Link>
                </li>
              );
            })}
            <LanguageSelect
              style={{ color: transparent ? 'white' : 'black' }}
            />
          </ul>
        </nav>
      ) : (
        <nav
          className={`header ${
            transparent && !forceColor ? 'transparent' : ''
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
                <Logo />
                <h1 style={{ color: transparent ? 'white' : 'black' }}>
                  {headerText}
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
              {navItems.map((_, key) => {
                return (
                  <li
                    key={key}
                    className="header__lower-container__navitem-container__item"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      to={`/${navItems[key].to}`}
                    >
                      {navItems[key].text}
                    </Link>
                  </li>
                );
              })}
              <li className="header__lower-container__navitem-container__item">
                <LanguageSelect
                  style={{ color: transparent ? 'white' : 'black' }}
                />
              </li>
            </AnimateHeight>
          </ul>
        </nav>
      );
    }
  )
);

export default Header;
