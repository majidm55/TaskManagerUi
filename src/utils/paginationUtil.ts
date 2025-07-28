import type { TasksApiResponse } from "types/index";

export const calculatePaginationData = (data: TasksApiResponse) => {
  const statusGroups = [
    data.pending,
    data.inProgress,
    data.completed,
    data.archived,
  ];

  const maxTotalPages = Math.max(
    ...statusGroups.map((group) => group?.totalPages || 1)
  );

  const totalCount = statusGroups.reduce(
    (sum, group) => sum + (group?.totalCount || 0),
    0
  );

  return {
    totalPages: maxTotalPages,
    totalCount: totalCount,
  };
};
