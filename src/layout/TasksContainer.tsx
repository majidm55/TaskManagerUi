import AddTask from "@/components/AddTask";
import TaskBoard from "@/components/TaskBoard";

interface TasksContainerProps {
  page: number;
  pageSize: number;
}

export default function TasksContainer({
  page,
  pageSize,
}: TasksContainerProps) {
  return (
    <div className="tasks-layout-container">
      <AddTask />
      <TaskBoard page={page} pageSize={pageSize} />
    </div>
  );
}
