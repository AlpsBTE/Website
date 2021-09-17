import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { CSSProperties } from 'react';
import './button.scss';

export interface ButtonProps {
  label: string;
  /*eslint-disable-next-line */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  size?: 'lg' | 'md' | 'sm';
  style?: CSSProperties;
  className?: string;
  icon?: IconProp;
  link?: string;
}

export const Button = ({
  label,
  onClick = () => void 0,
  disabled = false,
  style = {},
  size = 'md',
  className = '',
  icon,
  link,
}: ButtonProps) => {
  const button = (
    <button
      style={style}
      disabled={disabled}
      className={`button button__${size} ${className} button__${
        disabled ? 'disabled' : ''
      }`}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon className="button__icon" icon={icon} />}
      <span className="button__label">{label}</span>
    </button>
  );

  return link ? (
    <a href={link} target="_blank" rel="noreferrer">
      {button}
    </a>
  ) : (
    button
  );
};

export default Button;
