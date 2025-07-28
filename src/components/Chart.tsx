import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type PieData = {
  name: string;
  value: number;
};

type PieChartWithLabelsProps = {
  data: PieData[];
  colorMap: Record<string, string>;
};

type PieLabelRenderProps = {
  cx: number;
  cy: number;
  midAngle?: number; // optional because Recharts may omit
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
  index?: number;
  name?: string;
};
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle = 0,
  innerRadius = 0,
  outerRadius = 0,
  percent = 0,
  name = "",
}: PieLabelRenderProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={13}
      fontWeight="bold"
      fontFamily="Manrope"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartWithLabels({
  data,
  colorMap,
}: PieChartWithLabelsProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(props) =>
            renderCustomizedLabel({ ...props, name: props.payload.name })
          }
          outerRadius={200}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={colorMap[entry.name] || "#ccc"} // fallback color
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
