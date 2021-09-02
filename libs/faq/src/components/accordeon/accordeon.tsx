import { CSSProperties, useState } from 'react';
import './accordeon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable-next-line */
export interface AccordeonProps {
  title: string;
  content: string;
  open?: boolean;
  style?: CSSProperties;
}

export function Accordeon(props: AccordeonProps) {
  const [open, setOpen] = useState(props.open ? true : false);

  function accordeon__toggle(e: any) {
    e.preventDefault();

    setOpen(open ? false : true);
  }

  //  + open ? '360deg' : '180deg' +

  return (
    <div className="accordion">
      <div className="accordion__title" onClick={accordeon__toggle}>
        <span className="accordeon__title">{props.title}</span>
        <span
          className="accordion__icon"
          style={{
            ...props.style,
            transform: open ? 'rotate(360deg)' : 'rotate(180deg)',
          }}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </span>

        <div className="accordion__content" aria-expanded={!open}>
          <p className="accordion__content__text">{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordeon;
