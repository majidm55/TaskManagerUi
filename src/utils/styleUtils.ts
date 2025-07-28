import { alpha } from "@mui/material/styles";

export const getStatusColor = (status: string, opacity: number = 1): string => {
  const baseColors: Record<string, string> = {
    completed: "#63d7ba",
    inProgress: "#0288d1",
    pending: "#403d39",
    archived: "#ff81ff",
  };

  return alpha(baseColors[status] || "#000000", opacity);
};
