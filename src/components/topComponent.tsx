import * as React from 'react';
import { HogeState } from '../states/hogeState';
import { HogeActions } from '../containers/hogeContainer';

interface OwnProps {}

type HogeProps = OwnProps & HogeState & HogeActions;

export const TopComponent: React.SFC<HogeProps> = (props: HogeProps) => {
  return(
    <div>
      <div className="box">Hey! 本棚App</div>
      <div className="field">
        <input
          type="email"
          placeholder="email"
          value={props.email}
          onChange={(e) => props.updateEmail(e.target.value)}
        />
      </div>
    </div>
  );
}