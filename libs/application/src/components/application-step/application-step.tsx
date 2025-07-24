/* eslint-disable */
import { CSSProperties } from 'react';
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
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ApplicationStep;
