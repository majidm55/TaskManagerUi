import { useState } from "react";
import {
  Modal,
  Box,
  FormControl,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  type ButtonProps,
  styled,
} from "@mui/material";
import { TaskStatusEnum, type TaskStatus } from "@/types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fffef2",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

const CancelButton = styled(Button)<ButtonProps>(() => ({
  color: "#000000",
  border: "1px solid #000",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "rgba(252, 14, 14, 0.8)",
  },
}));

interface TaskFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (taskName: string, taskStatus: TaskStatus) => void;
}

const TaskFormModal = ({ open, onClose, onSubmit }: TaskFormModalProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState<TaskStatus>(
    TaskStatusEnum.pending
  );
  const [errors, setErrors] = useState({ taskName: "", taskStatus: "" });

  const validateForm = () => {
    const newErrors = { taskName: "", taskStatus: "" };
    let isValid = true;

    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;

    if (!taskName.trim()) {
      newErrors.taskName = "Task name is required";
      isValid = false;
    } else if (!alphanumericRegex.test(taskName.trim())) {
      newErrors.taskName =
        "Task name can only contain letters, numbers, and spaces";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(taskName.trim(), taskStatus);
      setTaskName("");
      setTaskStatus(TaskStatusEnum.pending);
      setErrors({ taskName: "", taskStatus: "" });
      onClose();
    }
  };

  const handleClose = () => {
    setTaskName("");
    setTaskStatus(TaskStatusEnum.pending);
    setErrors({ taskName: "", taskStatus: "" });
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <FormControl sx={{ width: "100%", gap: "20px" }}>
            <TextField
              label="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              error={!!errors.taskName}
              helperText={errors.taskName}
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFCF33",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFCF33",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
            />

            <FormControl
              sx={{
                "& .MuiInputLabel-root": {
                  color: "black !important", // Force black label
                },
              }}
              fullWidth
              error={!!errors.taskStatus}
            >
              <InputLabel>Task Status</InputLabel>
              <Select
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value as TaskStatus)}
                label="Task Status"
                sx={{
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFCF33",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#FFCF33",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(0, 0, 0, 0.23)", // default border color
                  },
                }}
              >
                <MenuItem value={TaskStatusEnum.pending}>Pending</MenuItem>
                <MenuItem value={TaskStatusEnum.inProgress}>
                  In Progress
                </MenuItem>
                <MenuItem value={TaskStatusEnum.completed}>Completed</MenuItem>
                <MenuItem value={TaskStatusEnum.archived}>Archived</MenuItem>
              </Select>
              {errors.taskStatus && (
                <FormHelperText>{errors.taskStatus}</FormHelperText>
              )}
            </FormControl>
          </FormControl>

          <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
            <ColorButton type="submit" variant="contained" fullWidth>
              Add Task
            </ColorButton>
            <CancelButton onClick={handleClose} variant="outlined" fullWidth>
              Cancel
            </CancelButton>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default TaskFormModal;
