import './button.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  size: 'lg' | 'md' | 'sm';
}

export function Button(props: ButtonProps) {

  return (
    <button
      disabled={props.disabled}
      className={'button button__' + props.size}
      onClick={props.onClick}
    >
      {props.label}

      {props.disabled}
    </button>
  );
}

export default Button;
