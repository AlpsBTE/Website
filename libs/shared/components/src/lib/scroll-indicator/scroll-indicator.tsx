/* eslint-disable */
import './scroll-indicator.module.scss';

export enum ScrollIndicatorPointingDirection {
  up = 'up',
  right = 'right',
  down = 'down',
  left = 'left',
}

export interface ScrollIndicatorProps {}

export const ScrollIndicator = ({}: ScrollIndicatorProps) => {
  return (
    <div className="scroll-indicator">
      <div></div>
    </div>
  );
};

export default ScrollIndicator;
