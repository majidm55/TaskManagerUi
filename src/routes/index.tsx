import { createFileRoute } from "@tanstack/react-router";
import NavigationContainer from "../layout/NavigationContainer";
import LandingPage from "@/layout/LandingPage";

const Index = () => {
  return (
    <NavigationContainer>
      <LandingPage />
    </NavigationContainer>
  );
};
export const Route = createFileRoute("/")({
  component: Index,
});
