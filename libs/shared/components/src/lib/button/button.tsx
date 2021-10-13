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
  fillColor?: string;
  textColor?: string;
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
  fillColor,
  textColor,
}: ButtonProps) => {
  const button = (
    <button
      style={{
        ...style,
        backgroundColor: fillColor !== undefined ? fillColor : 'unset',
        borderColor: fillColor !== undefined ? fillColor : 'unset',
      }}
      disabled={disabled}
      className={`button button__${size} ${className} button__${
        disabled ? 'disabled' : ''
      }`}
    >
      {icon && <FontAwesomeIcon className="button__icon" icon={icon} />}
      <span
        className="button__label"
        style={{ color: textColor !== undefined ? textColor : 'unset' }}
      >
        {label}
      </span>
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

//backgroundColor: fillColor !== undefined ? fillColor : 'unset',
//      borderColor: fillColor !== undefined ? fillColor : 'unset',
