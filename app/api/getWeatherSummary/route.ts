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
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Canlı yayında hava durumunu sunuyor gibi davran. Kendini Alperen Kılıç olarak tanıt. Enerjik bir sunum yap. Hava durumunu sunduğun şehri bildir ve günlük hava durumunu anlat. İzleyici için anlaşılabilir bir şekilde günlük hava durumuna nasıl hazırlanabileceklerinden bahset. Veri içerisindeki uv_index verisini kullanarak UV tavsiyesinde bulun. Verilerin kullanıcıdan değil, meteoroloji ofisinden geldiğini varsay. Maksimum 6 cümle kullan.",
      },
      {
        role: "user",
        content: `Merhaba, günlük hava durumunun özetini çıkarabilir misin? Bunu yaparken şu datayı kullan: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
    temperature: 0.7,
    n: 1,
    stream: true,
  };

  const stream = await OpenAIStream(payload);
  return new NextResponse(stream, {
    headers: {
      "Cache-Control": "s-maxage=86400, max-age=0",
    },
  });

  // return NextResponse.json(data.choices[0].message);
}
