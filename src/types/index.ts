export const TaskStatusEnum = {
  pending: 0,
  inProgress: 1,
  completed: 2,
  archived: 3,
} as const;

export type TaskStatus = (typeof TaskStatusEnum)[keyof typeof TaskStatusEnum];

export interface TaskItem {
  id: number;
  title: string;
  status: TaskStatus;
}
