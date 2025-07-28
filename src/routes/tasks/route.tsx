import { createFileRoute, Outlet } from "@tanstack/react-router";
import NavigationContainer from "@/layout/NavigationContainer";

const PathlessLayoutComponent = () => {
  return (
    <NavigationContainer>
      <Outlet />
    </NavigationContainer>
  );
};
export const Route = createFileRoute("/tasks")({
  component: PathlessLayoutComponent,
});
