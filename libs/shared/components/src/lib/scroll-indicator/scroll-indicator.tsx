/* eslint-disable */
import { CSSProperties } from 'react';
import './scroll-indicator.scss';

export enum ScrollIndicatorPointingDirection {
  up = 'up',
  right = 'right',
  down = 'down',
  left = 'left',
}

export interface ScrollIndicatorProps {
  direction?: ScrollIndicatorPointingDirection;
  style?: CSSProperties;
}

export const ScrollIndicator = ({
  direction = ScrollIndicatorPointingDirection.down,
  style = {},
}: ScrollIndicatorProps) => {
  return (
    <i
      className={`scroll-indicator scroll-indicator__${direction}`}
      style={style}
      onClick={() =>
        window.scrollBy({
          top: window.screen.height - window.screen.height * 0.15,
        })
      }
    >
      <></>
    </i>
  );
};

export default ScrollIndicator;
