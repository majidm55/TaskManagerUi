import { Box, Button, Container, Grid, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { useNavigate } from "@tanstack/react-router";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh",
        bgcolor: "#f7f9fc",
        color: "#333",
      }}
    >
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #FFCF33 0%, #F19429 100%)",
          color: "#fff",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            TaskManager Pro
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            The ultimate task management tool for productivity and clarity.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#333",
              color: "#fff",
              "&:hover": { backgroundColor: "#222" },
            }}
            startIcon={<RocketLaunchIcon />}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8, flexGrow: 1 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Features
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2, justifyContent: "center" }}>
          {[
            {
              icon: <TaskAltIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
              title: "Organize Tasks",
              description:
                "Group, prioritize, and track everything in one place.",
              location: "/tasks",
            },
            {
              icon: <AnalyticsIcon sx={{ fontSize: 40, color: "#F19429" }} />,
              title: "Track Progress",
              description:
                "Visual analytics to help you stay on top of your goals.",
              location: "/tasks/analytics",
            },
          ].map((feature, i) => (
            <Grid
              size={{
                xs: 2,
                sm: 6,
                md: 4,
              }}
              key={i}
            >
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor: "#fff",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate({
                    to: feature.location,
                  });
                }}
              >
                {feature.icon}
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ py: 4, textAlign: "center", bgcolor: "#eee", mt: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} TaskManager Pro. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
