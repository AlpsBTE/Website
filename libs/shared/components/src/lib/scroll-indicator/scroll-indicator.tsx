/* eslint-disable */
import './scroll-indicator.scss';

export enum ScrollIndicatorPointingDirection {
  up = 'up',
  right = 'right',
  down = 'down',
  left = 'left',
}

export interface ScrollIndicatorProps {
  direction?: ScrollIndicatorPointingDirection;
}

export const ScrollIndicator = ({
  direction = ScrollIndicatorPointingDirection.down,
}: ScrollIndicatorProps) => {
  return (
    <i className={`scroll-indicator scroll-indicator__${direction}`}>
      <></>
    </i>
  );
};

export default ScrollIndicator;
