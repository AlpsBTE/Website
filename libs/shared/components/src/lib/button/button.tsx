import './button.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  size: 'lg' | 'md' | 'sm';
  color: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      disabled={props.disabled}
      className={'button button__' + props.size}
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
    >
      {props.label}
    </button>
  );
}

export default Button;
