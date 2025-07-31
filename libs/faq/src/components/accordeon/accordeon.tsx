import { CSSProperties, useState, MouseEvent, ReactNode } from 'react';
import './accordeon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable-next-line */
export interface AccordeonProps {
  readonly title: string;
  readonly content: string;
  readonly open?: boolean;
  readonly style?: CSSProperties;
}

export function Accordeon({ title, content, open, style }: AccordeonProps) {
  const [isOpen, setIsOpen] = useState(!!open);

  const toggleAccordeon = (e: MouseEvent) => {
    e.preventDefault();

    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div
        role="button"
        tabIndex={0}
        onClick={toggleAccordeon}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleAccordeon(e as unknown as MouseEvent);
          }
        }}
        className="accordion__container"
      >
        <div className="accordion__subContainer">
          <span className="accordeon_title">{title}</span>
          <span
            className="accordion__icon"
            style={{
              ...style,
              transform: isOpen ? 'rotate(0deg)' : 'rotate(-180deg)',
            }}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </div>

        <div className="accordion__content" aria-expanded={!isOpen}>
          <p className="accordion__content__text">{linkify(content)}</p>
        </div>
      </div>
    </div>
  );
}

const linkify = (text: string): (string | ReactNode)[] => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a
          href={part}
          key={`${part}-${i}`}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

export default Accordeon;
