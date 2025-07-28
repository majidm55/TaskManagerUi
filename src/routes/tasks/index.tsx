import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import TasksContainer from "@/layout/TasksContainer";

const tasksSearchSchema = z.object({
  page: z.number().min(1).catch(1),
  pageSize: z.number().min(5).max(50).catch(10),
});

const RouteComponent = () => {
  const { page, pageSize } = Route.useSearch();
  return <TasksContainer page={page} pageSize={pageSize} />;
};

export const Route = createFileRoute("/tasks/")({
  component: RouteComponent,
  validateSearch: tasksSearchSchema,
});
