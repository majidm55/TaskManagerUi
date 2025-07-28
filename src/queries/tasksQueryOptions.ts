import { queryOptions } from "@tanstack/react-query";
import getAllTasks from "../api/tasks/getAllTasks";

export const tasksQueryOptions = (page: number, pageSize: number) =>
  queryOptions({
    queryKey: ["tasks", page, pageSize],
    queryFn: () => getAllTasks(page, pageSize),
  });
