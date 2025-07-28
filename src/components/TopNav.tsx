import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function TopNav() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar
        sx={{ backgroundColor: "#ffcf33", boxShadow: "none" }}
        position="static"
      >
        <Toolbar>
          <img
            src={
              "https://cdn.prod.website-files.com/63bf248f772d10d3ae199fc4/63c0275833a4b83e20dc2407_ezra.svg"
            }
            style={{ width: "60px" }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              fontFamily: "Manrope",
              fontWeight: "700",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Assignment
          </Typography>
          <Typography
            className="!manrope-bold"
            // variant="h6"
            component="div"
            sx={{
              color: "black",
              fontFamily: "Manrope",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            M.Majid
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
