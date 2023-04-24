"use client";

import { Card, AreaChart, Title } from "@tremor/react";

type Props = {
  results: Root;
};

function RainChart({ results }: Props) {
  const hourly = results?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("tr-TR", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);

  const data = hourly.map((hour, i) => ({
    time: Number(hour),
    "Yağış (%)": results.hourly.precipitation_probability[i],
  }));

  const dataFormatter = (number: Number) => `${number} %`;
  return (
    <Card>
      <Title>Yağış İhtimali</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Yağış (%)"]}
        colors={["blue"]}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default RainChart;
