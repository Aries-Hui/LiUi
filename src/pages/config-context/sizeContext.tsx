import {tuple} from "../util/type";

const SizeProps = tuple('mini', 'small', 'middle', 'big', 'large');
export type SizeProp = typeof SizeProps[number];
