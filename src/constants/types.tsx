export enum COLUMN_TYPES {
  TO_DO = "TODO",
  IN_PROGRESS = "IN-PROGRESS",
  DONE = "DONE",
}

export type TASK = {
  id: number;
  icon: string;
  status: string;
  title: string;
  content: string;
};

export const ITEM_TYPE = "TASK";

export const COLUMN = [
  COLUMN_TYPES.TO_DO,
  COLUMN_TYPES.IN_PROGRESS,
  COLUMN_TYPES.DONE,
];
