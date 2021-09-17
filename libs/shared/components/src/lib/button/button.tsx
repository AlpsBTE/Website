import { CSSProperties } from 'react';
import './button.scss';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'lg' | 'md' | 'sm';
  style?: CSSProperties;
  className?: string;
}

export const Button = ({
  label,
  onClick = () => void 0,
  disabled = false,
  style = {},
  size = 'md',
  className = '',
}: ButtonProps) => {
  return (
    <button
      style={{
        ...style,
        borderColor: disabled ? 'gray' : 'white',
        opacity: disabled ? '0.5' : '1',
      }}
      disabled={disabled}
      className={`button button__${size} ${className} button__${
        disabled ? 'disabled' : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
