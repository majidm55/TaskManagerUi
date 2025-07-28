import getAllAnalytics from "@/api/analytics/getAllAnalytics";
import AnalyticsDashboard from "@/layout/Analytics";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const pieDataSchema = z.object({
  value: z.number(),
  name: z.string(),
});

const analyticsSchema = z.object({
  pending: pieDataSchema,
  inProgress: pieDataSchema,
  completed: pieDataSchema,
  archived: pieDataSchema,
});

export const Route = createFileRoute("/tasks/analytics")({
  component: RouteComponent,
  loader: async () => {
    const rawData = await getAllAnalytics();
    const validated = analyticsSchema.parse(rawData);
    const transformed = Object.values(validated);
    return transformed;
  },
});

function RouteComponent() {
  return (
    <div>
      <AnalyticsDashboard />
    </div>
  );
}
