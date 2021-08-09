import React, { CSSProperties } from 'react';
import './Button.scss';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  size: 'lg' | 'md' | 'sm';
  style: CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  size,
  style,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={'button button__' + size}
      onClick={() => onClick()}
      style={{ ...style }}
    >
      {label}

      {disabled}
    </button>
  );
};

export default Button;
