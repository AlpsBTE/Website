/* eslint-disable */
import { ROUTES } from '@alpsbte/router';
import { scrollLinks } from '@alpsbte/shared/config';
import { languageStore } from '@alpsbte/shared/stores';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
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

export const ScrollIndicator = inject(languageStore.storeKey)(
  observer(
    ({
      direction = ScrollIndicatorPointingDirection.down,
      style = {},
    }: ScrollIndicatorProps) => {
      return (
        <a
          href={`/${languageStore.language}/${ROUTES.home}#${scrollLinks.ourMission}`}
        >
          <i
            className={`scroll-indicator scroll-indicator__${direction}`}
            style={style}
          ></i>
        </a>
      );
    }
  )
);

export default ScrollIndicator;
