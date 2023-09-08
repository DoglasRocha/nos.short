import { HistoryObject } from "../features/history";

export type Props = {
  children?: React.ReactNode;
  newState?: string;
  text?: string;
  stateSetter?: React.SetStateAction;
  last?: boolean;
  link?: HistoryObject;
};
