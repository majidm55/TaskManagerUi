import Box from "@mui/material/Box";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { Button, styled, type ButtonProps } from "@mui/material";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/router";
import addTask from "@/api/tasks/addTask";
import { tasksQueryOptions } from "@/queries/tasksQueryOptions";
import TaskFormModal from "./TaskFormModal";
import type { TaskStatus } from "types/index";
import { useSearch } from "@tanstack/react-router";
import { Route } from "@/routes/tasks/index";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#FFCF33"),
  backgroundColor: "#FFCF33",
  "&:hover": {
    backgroundColor: "rgba(255, 207, 51, 0.5)",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "none",
  },
  "&:focus-visible": {
    outline: "none",
    boxShadow: "none",
  },
}));

export default function AddTask() {
  const { page, pageSize } = useSearch({ from: Route.id });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const taskAddMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: tasksQueryOptions(page, pageSize).queryKey,
      });
    },
    onError: () => {},
  });

  const handleTaskAdd = (taskName: string, taskStatus: TaskStatus) => {
    taskAddMutation.mutate({
      title: taskName,
      status: taskStatus,
    });
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        display: "flex",
        justifyContent: "flex-estart",
        ml: 1,
        mb: 2,
      }}
    >
      <ColorButton
        onClick={handleOpen}
        variant="contained"
        startIcon={<AddTaskIcon />}
      >
        Add Task
      </ColorButton>
      <TaskFormModal
        open={open}
        onClose={handleClose}
        onSubmit={handleTaskAdd}
      />
    </Box>
  );
}
