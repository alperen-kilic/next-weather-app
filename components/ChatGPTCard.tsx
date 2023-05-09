"use client";

import React, { useEffect, useState } from "react";
import CalloutCard from "./CalloutCard";
import getBasePath from "@/lib/getBasePath";

type Props = {
  data: {
    current_weather: {
      temperature: number;
      windspeed: number;
      winddirection: number;
      time: string;
      weathercode: number;
    };
    hourly: {
      temperature_2m: number[];
      snowfall: number[];
      rain: number[];
      relativehumidity_2m: number[];
      precipitation_probability: number[];
      uv_index: number[];
    };
    timezone: string;
    timezone_abbreviation: string;
    hourly_units: HourlyUnits;
    city: string;
  };
};

const ChatGPTCard = (props: Props) => {
  const [content, setContent] = useState("");
  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          weatherData: props.data,
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = response.body;
      if (!data) {
        return;
      }

      const reader = data.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const values = await reader.read();
        const { value, done: doneReading } = values;
        done = doneReading;
        const chunkValue = decoder.decode(value);
        setContent((prev) => prev + chunkValue);
      }
    };

    fetcher();
  }, []);

  return <CalloutCard message={content} />;
};

export default ChatGPTCard;
