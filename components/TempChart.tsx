"use client";

import { Card, AreaChart, Title } from "@tremor/react";

type Props = {
  results: Root;
};

function TempChart({ results }: Props) {
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
    "UV İndeksi": results.hourly.uv_index[i],
    "Sıcaklık (C)": results.hourly.temperature_2m[i],
  }));

  const dataFormatter = (number: Number) => `${number} °C`;
  return (
    <Card>
      <Title>Sıcaklık & UV İndeksi</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Sıcaklık (C)", "UV İndeksi"]}
        colors={["yellow", "rose"]}
        minValue={-20}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default TempChart;
