import {
  Card,
  CardHeader,
  IconButton,
  CardActions,
  Tooltip,
} from "@mui/material";
import { Stack, styled } from "@mui/system";
import { type TaskItem } from "@/types";
import PendingIcon from "@mui/icons-material/Pending";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";

import type { JSX } from "react";
import { getStatusColor } from "@/utils/styleUtils";

interface TaskCardProps {
  item: TaskItem;
  status: string;
  onStatusChange: (newStatus: number, itemId: number) => void;
  onDelete: (itemId: number) => void;
}

const Heading = styled("span")(() => ({
  color: "#333333",
  fontWeight: "bold",
  fontSize: "12px",
  fontFamily: "Manrope",
  textOverflow: "ellipsis",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
}));

const buttonConfig: Record<
  string,
  {
    label: string;
    color: string;
    icon: JSX.Element;
    status: number;
  }
> = {
  pending: {
    label: "Mark Pending",
    color: "disabled",
    icon: <PendingIcon color="disabled" />,
    status: 0,
  },
  inProgress: {
    label: "Mark In Progress",
    color: "info",
    icon: <DonutLargeIcon color="info" />,
    status: 1,
  },
  completed: {
    label: "Mark Completed",
    color: "success",
    icon: <TaskAltIcon color="success" />,
    status: 2,
  },
  archived: {
    label: "Archive Task",
    color: "secondary",
    icon: <ArchiveIcon color="secondary" />,
    status: 3,
  },
};

const TaskCard = ({
  item,
  status,
  onStatusChange,
  onDelete,
}: TaskCardProps) => {
  const renderActionButtons = (currentStatus: string) => {
    return Object.entries(buttonConfig)
      .filter(([status]) => status !== currentStatus)
      .map(([statusKey, config]) => (
        <Tooltip
          key={statusKey}
          title={config.label}
          slotProps={{
            popper: {
              disablePortal: true,
            },
          }}
        >
          <IconButton
            key={config.status}
            onClick={() => {
              onStatusChange(config.status, item.id);
            }}
            sx={{
              bgcolor: config.color,
              color: "black",
              textTransform: "none",
              fontSize: "5px",
              "&:hover": {
                bgcolor: config.color,
                opacity: 0.9,
              },
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
              "&:focus-visible": {
                outline: "none",
                boxShadow: "none",
              },
            }}
            size="small"
          >
            {config.icon}
          </IconButton>
        </Tooltip>
      ));
  };
  return (
    <Card
      sx={{
        maxWidth: 200,
        height: 100,
        m: "8px 1px",
        backgroundColor: getStatusColor(status, 0.2),
      }}
    >
      <CardHeader
        title={<Heading key={item.title}>{item.title}</Heading>}
        sx={{
          paddingRight: "8px",
          paddingLeft: "8px",
          paddingBottom: "8px",
          justifyContent: "center",
          "& .MuiCardHeader-content": {
            flex: "1 1 auto",
            overflow: "hidden",
          },
        }}
      />
      <CardActions sx={{ justifyContent: "center" }}>
        <Stack direction="row" spacing={1}>
          {renderActionButtons(status)}
          <Tooltip
            key={"delete-item"}
            title={"Delete Task"}
            slotProps={{
              popper: {
                disablePortal: true,
              },
            }}
          >
            <IconButton
              key={"delete"}
              onClick={() => {
                onDelete(item.id);
              }}
              sx={{
                bgcolor: "error",
                color: "black",
                textTransform: "none",
                fontSize: "5px",
                "&:hover": {
                  bgcolor: "error",
                  opacity: 0.9,
                },
                "&:focus": {
                  outline: "none",
                  boxShadow: "none",
                },
                "&:focus-visible": {
                  outline: "none",
                  boxShadow: "none",
                },
              }}
              size="small"
            >
              <DeleteIcon sx={{ cursor: "pointer" }} color="error" />
            </IconButton>
          </Tooltip>
        </Stack>
      </CardActions>
    </Card>
  );
};
export default TaskCard;
