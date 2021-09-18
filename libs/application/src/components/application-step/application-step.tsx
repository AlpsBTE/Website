/* eslint-disable */
import './application-step.scss';

export interface ApplicationStepProps {
  stepNumber: number;
  title: string;
  description: string;
  img: string;
}

export const ApplicationStep = ({
  stepNumber,
  title,
  description,
  img,
}: ApplicationStepProps) => {
  return (
    <div className="application-step">
      <h1>Welcome to ApplicationStep!</h1>
    </div>
  );
};

export default ApplicationStep;
