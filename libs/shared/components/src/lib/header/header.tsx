import { Link } from 'react-router-dom';
import './header.module.scss';

/* eslint-disable-next-line */

interface navItems {
  text: string;
  to: string;
}
export interface HeaderProps {
  headerText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headerIcon: any;
  navItems: navItems[];
}

export function Header(props: HeaderProps) {
  return (
    <nav className="header__">
      <div className="header__image-container">
        <img src={props.headerIcon} alt={props.headerText} />
      </div>
      <ul className="header__navitem-container">
        {props.navItems.map((_, key) => {
          return (
            <Link to={props.navItems[key].to}>
              <li className="header__navitem_container__item">
                {props.navItems[key].to}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Header;
