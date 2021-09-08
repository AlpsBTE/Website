import './press-image.scss';

/* eslint-disable-next-line */
export interface PressImageProps {
  src: string;
}

export function PressImage(props: PressImageProps) {
  return (
    <div>
      <img className="press-image" src={props.src} alt="Press Icon"></img>
    </div>
  );
}

export default PressImage;
