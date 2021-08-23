import './button.scss';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'lg' | 'md' | 'sm';
  color?: string;
  center?: boolean;
  marginTop?: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      style={{
        color: props.disabled ? 'gray' : props.color,
        borderColor: props.disabled ? 'gray' : props.color,
        opacity: props.disabled ? '0.5' : '1',
        marginLeft: props.center ? 'auto' : 'unset',
        marginRight: props.center ? 'auto' : 'unset',
        marginTop: props.marginTop ? props.marginTop : 'unset',

}}
      disabled={props.disabled}
      className={`button button__${props.size} button__${
        props.disabled ? 'disabled' : ''
      }`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

Button.defaultProps = {
  size: 'md',
  disabled: false,
  onclick: () => null,
  color: '#000',
  center: false,
};

export default Button;
