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
  createdAt: string;
}

export interface PagedResult<T> {
  data: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface TasksApiResponse {
  pending: PagedResult<TaskItem>;
  inProgress: PagedResult<TaskItem>;
  completed: PagedResult<TaskItem>;
  archived: PagedResult<TaskItem>;
}

// utils/pagination.ts
export interface PaginationData {
  totalPages: number;
  totalCount: number;
  maxPages: number;
  hasData: boolean;
}
