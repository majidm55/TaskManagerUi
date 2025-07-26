import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

const Index = () => {
  return (
    <div className="p-2">
      <h3 className="font-primary">Welcome Home!LIOBREEEE</h3>
      <App />
    </div>
  );
};
export const Route = createFileRoute("/")({
  component: Index,
});
