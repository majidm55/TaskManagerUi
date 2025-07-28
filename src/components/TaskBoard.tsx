import {
  Alert,
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Grid,
  styled,
} from "@mui/material";
import TaskCard from "./TaskCard";
import type { TaskItem } from "../types";
import { useMutation, useQuery } from "@tanstack/react-query";
import updateTask from "../api/tasks/updateTask";
import { tasksQueryOptions } from "@/queries/tasksQueryOptions";
import PendingIcon from "@mui/icons-material/Pending";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArchiveIcon from "@mui/icons-material/Archive";
// import { queryClient } from "@/router";
import { useQueryClient } from "@tanstack/react-query";
import deleteTask from "@/api/tasks/deleteTask";
import "../App.css";
import { useNavigate } from "@tanstack/react-router";
import SimplePagination from "./Pagination";
import { calculatePaginationData } from "@/utils/paginationUtil";

interface TasksComponentProps {
  page: number;
  pageSize: number;
}

const lanes = [
  { title: "Pending", value: "pending" },
  { title: "In Progress", value: "inProgress" },
  { title: "Completed", value: "completed" },
  { title: "Archived", value: "archived" },
];

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

const TaskList = styled("div")(() => ({
  minHeight: "100px",
  display: "flex",
  flexDirection: "column",
  background: "#d7dce8",
  minWidth: "200px",
  borderRadius: "5px",
  padding: "15px 15px",
  marginRight: "30px",
  height: "100%",
}));

const TaskColumnStyles = styled("div")(() => ({
  display: "flex",
  width: "100%",
  height: "calc(100vh - 300px)",
}));
const Title = styled("span")(() => ({
  fontWeight: "bold",
  color: "#333333",
  fontSize: 16,
  marginBottom: "1.5px",
  marginLeft: "10px",
}));

export default function TaskBoard({ page, pageSize }: TasksComponentProps) {
  const { data, isLoading, error, isFetching } = useQuery(
    tasksQueryOptions(page, pageSize)
  );
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const taskStatusDeleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: tasksQueryOptions(page, pageSize).queryKey,
      });
    },
    onError: () => {},
  });

  const taskStatusUpdateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: tasksQueryOptions(page, pageSize).queryKey,
      });
    },
    onError: () => {},
  });

  const handleTaskUpdate = (status: number, itemId: number) => {
    taskStatusUpdateMutation.mutate({
      status,
      itemId: itemId,
    });
  };

  const handleTaskDelete = (itemId: number) => {
    taskStatusDeleteMutation.mutate({
      itemId,
    });
  };

  const renderStatusAvatar = (status: string) => {
    switch (status) {
      case "pending":
        return <PendingIcon sx={{ cursor: "pointer" }} color="disabled" />;
      case "inProgress":
        return <DonutLargeIcon sx={{ cursor: "pointer" }} color="info" />;
      case "completed":
        return <TaskAltIcon sx={{ cursor: "pointer" }} color="success" />;
      case "archived":
        return <ArchiveIcon sx={{ cursor: "pointer" }} color="secondary" />;
      default:
        return <Avatar></Avatar>;
    }
  };
  const handlePageChange = (newPage: number) => {
    navigate({
      to: "/tasks",
      search: { page: newPage, pageSize },
    });
  };

  const handlePageSizeChange = (newPageSize: number) => {
    navigate({
      to: "/tasks",
      search: { page: 1, pageSize: newPageSize },
    });
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        Error loading tasks:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </Alert>
    );
  }

  if (!data) {
    return null;
  }

  const paginationData = calculatePaginationData(data);

  return (
    <div style={{ margin: "0 auto" }}>
      {isFetching && (
        <Box sx={{ position: "fixed", top: 16, right: 16, zIndex: 1000 }}>
          <CircularProgress size={24} />
        </Box>
      )}
      <Container>
        <TaskColumnStyles>
          {lanes.map((lane, index) => {
            return (
              <TaskList key={lane.value}>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    size={{ xs: 10 }}
                    key={index}
                  >
                    {renderStatusAvatar(lane.value)}
                    <Title>
                      {lane.title}({data[lane.value]?.data.length || 0})
                    </Title>
                  </Grid>
                </Box>
                <Divider />
                <Box
                  sx={{
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#ffcf33 #f1f1f1",
                  }}
                >
                  {data[lane.value].data.map((task: TaskItem) => (
                    <TaskCard
                      onStatusChange={handleTaskUpdate}
                      onDelete={handleTaskDelete}
                      status={lane.value}
                      key={task.id}
                      item={task}
                    />
                  ))}
                </Box>
              </TaskList>
            );
          })}
        </TaskColumnStyles>
        <SimplePagination
          page={page}
          pageSize={pageSize}
          totalPages={paginationData.totalPages}
          totalCount={paginationData.totalCount}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
          isLoading={isFetching}
        />
      </Container>
    </div>
  );
}
