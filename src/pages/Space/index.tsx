import React from "react";
import {tuple} from "../util/type";
import {SizeProp} from "../config-context/sizeContext";

const SpaceAligns = tuple('start', 'end', 'center', 'baseline');
type SpaceAlign = typeof SpaceAligns[number];
const SpaceDirections = tuple('vertical', 'horizontal');
type SpaceDirection = typeof SpaceDirections[number];


export interface SpaceProps {
  align?: SpaceAlign
  direction?: SpaceDirection
  size?: SizeProp | number
}

const Space: React.FC<SpaceProps> = (props) => {
  const {
    children
  } = props

  return (
    <div>
      {console.log(children)}
      {children}
    </div>
  )
}

export default Space;
