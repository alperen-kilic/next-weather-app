"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3D5AB8] to-[#284AA6] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-4xl md:text-5xl font-bold text-center mb-10">
          ChatGPT Hava Durumu
        </Text>
        <Subtitle className="text-xl text-center">
          OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0, Stepzen kullanılarak
          tasarlanmıştır.
        </Subtitle>

        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#3D5AB8] to-[#284AA6]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
