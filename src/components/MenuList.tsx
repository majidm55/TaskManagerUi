import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { useNavigate } from "@tanstack/react-router";

export default function NestedList() {
  const navigate = useNavigate();
  return (
    <List
      sx={{ width: "100%", maxWidth: 260, bgcolor: "transparent" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        onClick={() => {
          navigate({
            to: "/tasks",
            search: { page: 1, pageSize: 10 },
          });
        }}
        sx={{ fontFamily: "Manrope", fontWeight: "bold" }}
      >
        <ListItemIcon>
          <ListAltIcon color="primary" />
        </ListItemIcon>
        <ListItemText sx={{ color: "white" }} primary="Task Board" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          navigate({
            to: "/tasks/analytics",
          });
        }}
      >
        <ListItemIcon>
          <AnalyticsIcon sx={{ color: "#F19429" }} />
        </ListItemIcon>
        <ListItemText sx={{ color: "white" }} primary="Analytics" />
      </ListItemButton>
    </List>
  );
}
