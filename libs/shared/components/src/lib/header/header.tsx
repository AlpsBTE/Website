import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

interface navItems {
  text: string;
  to: string;
}
export interface HeaderProps {
  headerText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headerIcon: any;
  navItems: navItems[];
  forceColor: boolean;
}

export function Header(props: HeaderProps) {
  const [transparent, setTransparent] = useState<boolean>(true);

  window.addEventListener('scroll', () => {
    if (props.forceColor) return;

    if (window.scrollY >= 100) {
      if (transparent) {
        setTransparent(false);
      }
    } else {
      if (!transparent) {
        setTransparent(true);
      }
    }
  });

  return (
    <nav
      className={`header ${
        transparent && !props.forceColor ? 'transparent' : ''
      }`}
    >
      <div className="header__image-container ">
        <img src={props.headerIcon} alt={props.headerText} />
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
}

export default Header;
