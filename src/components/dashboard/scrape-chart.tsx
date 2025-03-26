"use client";

import { Card, CardContent, CardTitle } from "@src/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@src/components/ui/chart";
import { colors } from "@src/utils/colors";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const ScrapeChart = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "July", desktop: 160, mobile: 100 },
    { month: "August", desktop: 200, mobile: 150 },
    { month: "September", desktop: 180, mobile: 110 },
    { month: "October", desktop: 150, mobile: 90 },
    { month: "November", desktop: 250, mobile: 160 },
    { month: "December", desktop: 300, mobile: 180 },
  ];
  
  const chartConfig = {
    desktop: { label: "Desktop", color: colors.blue[300] },
    mobile: { label: "Mobile", color: colors.zinc[800] },
  } satisfies ChartConfig;
  

  return (
    <Card>
      <CardTitle>Scraped Pages</CardTitle>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            {Object.entries(chartConfig).map(([key, { color }]) => (
              <Bar key={key} dataKey={key} stackId="a" fill={color} radius={[4, 4, 0, 0]} />
            ))}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ScrapeChart;
