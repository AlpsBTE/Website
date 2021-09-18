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
      <div className="application-stepp__img">
        <img src="" alt="Application Step Discord" />
      </div>
    </div>
  );
};

export default ApplicationStep;
