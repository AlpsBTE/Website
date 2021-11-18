import './press-image.scss';

/* eslint-disable-next-line */
export interface PressImageProps {
  src: string;
  redirect: string;
}

export function PressImage(props: PressImageProps) {
  return (
    <div className="press-image">
      <a href={props.redirect} className="press-image__spacings">
        <img
          className="press-image__image"
          src={props.src}
          alt="Press Icon"
        ></img>
      </a>
    </div>
  );
}

export default PressImage;
