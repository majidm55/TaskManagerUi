import PieChartWithLabels from "@/components/Chart";
import { Route } from "@/routes/tasks/analytics";

const colorMap = {
  Pending: "#9E9E9E",
  "In Progress": "#0288d1",
  Completed: "#2e7d32",
  Archived: "#9c27b0",
};

interface PieData {
  name: string;
  value: number;
}

export default function AnalyticsDashboard() {
  const rawData = Route.useLoaderData();
  const data: PieData[] = rawData;
  return (
    <div style={{ width: 800, height: 500, margin: "0 auto" }}>
      <PieChartWithLabels data={data} colorMap={colorMap} />
    </div>
  );
}
