import { CSSProperties, useState, MouseEvent } from 'react';
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

  const toggleAccordeon = (e: MouseEvent) => {
    e.preventDefault();

    setOpen(open ? false : true);
  };

  return (
    <div className="accordion">
      <div className="accordion__container">
        <div
          onClick={(e) => toggleAccordeon(e)}
          className="accordion__subContainer"
        >
          <span className="accordeon_title">{props.title}</span>
          <span
            className="accordion__icon"
            style={{
              ...props.style,
              transform: open ? 'rotate(0deg)' : 'rotate(-180deg)',
            }}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </div>

        <div className="accordion__content" aria-expanded={!open}>
          <p className="accordion__content__text">{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordeon;
