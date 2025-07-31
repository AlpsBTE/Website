/* eslint-disable */
import { CSSProperties, ReactNode } from 'react';
import './application-step.scss';

export interface ApplicationStepProps {
  stepNumber: number;
  title: string;
  description: string;
  style?: CSSProperties;
}

export const ApplicationStep = ({
  stepNumber,
  title,
  description,
  style = {},
}: ApplicationStepProps) => {
  return (
    <div className="application-step" style={style}>
      <div className="application-step__content">
        <h2>
          {stepNumber}. {title}
        </h2>
        <p>{linkify(description)}</p>
      </div>
    </div>
  );
};

const linkify = (text: string): (string | ReactNode)[] => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const markdownLinkRegex = /\[([^\]]+)]\(([^)]+)\)/g;

  return text
    .split(markdownLinkRegex)
    .flatMap((part: string, i: number) => {
      if (i % 3 === 1) {
        const linkText = part;
        const linkUrl = text.split(markdownLinkRegex)[i + 1];
        return [
          <a
            href={linkUrl}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {linkText}
          </a>,
        ];
      }
      if (i % 3 === 2) {
        return [];
      }
      return part.split(urlRegex).map((urlPart: string, j: number) => {
        if (urlPart.match(urlRegex)) {
          return (
            <a
              href={urlPart}
              key={`${i}-${j}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {urlPart}
            </a>
          );
        }
        return urlPart;
      });
    })
    .filter(Boolean);
};

export default ApplicationStep;
