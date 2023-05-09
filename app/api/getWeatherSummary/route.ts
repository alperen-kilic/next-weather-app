export const runtime = "edge";

import { NextResponse } from "next/server";
import openai from "@/openai";
import { OpenAIStream } from "@/lib/OpenAIStream";

export async function POST(request: Request) {
  const { weatherData } = await request.json();

  const messages = [
    {
      role: "system",
      content:
        "Canlı yayında hava durumunu sunuyor gibi davran. Kendini Alperen Kılıç olarak tanıt. Enerjik bir sunum yap. Hava durumunu sunduğun şehri bildir ve günlük hava durumunu anlat. İzleyici için anlaşılabilir bir şekilde günlük hava durumuna nasıl hazırlanabileceklerinden bahset. Veri içerisindeki uv_index verisini kullanarak UV tavsiyesinde bulun. Verilerin kullanıcıdan değil, meteoroloji ofisinden geldiğini varsay.",
    },
    {
      role: "user",
      content: `Merhaba, günlük hava durumunun özetini çıkarabilir misin? Bunu yaparken şu datayı kullan: ${JSON.stringify(
        weatherData
      )}`,
    },
  ];

  const prompt = `Canlı yayında hava durumunu sunuyor gibi davran. Kendini Alperen Kılıç olarak tanıt. Enerjik bir sunum yap. Hava durumunu sunduğun şehri bildir ve günlük hava durumunu anlat. İzleyici için anlaşılabilir bir şekilde günlük hava durumuna nasıl hazırlanabileceklerinden bahset. Veri içerisindeki uv_index verisini kullanarak UV tavsiyesinde bulun. Verilerin kullanıcıdan değil, meteoroloji ofisinden geldiğini varsay. Bunu yaparken şu datayı kullan: ${JSON.stringify(
    weatherData
  )}`;

  const payload = {
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    max_tokens: 50,
    n: 1,
    stream: true,
  };

  const stream = await OpenAIStream(payload);
  return new Response(stream);

  // return NextResponse.json(data.choices[0].message);
}
