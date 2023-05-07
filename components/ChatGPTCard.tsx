"use client";
import React, { useEffect, useState } from "react";
import CalloutCard from "./CalloutCard";
import getBasePath from "@/lib/getBasePath";

type Props = {
  cleanData: {
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
  const [content, setContent] = useState("Yükleniyor...");
  useEffect(() => {
    const fetchGPT = async () => {
      const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          weatherData: props.cleanData,
        }),
      });

      const GPTdata = await res.json();
      const { content } = GPTdata;
      setContent(content);
    };

    fetchGPT().catch((e) => console.warn(e));
  }, []);
  return <CalloutCard message={content} />;
};

export default ChatGPTCard;
