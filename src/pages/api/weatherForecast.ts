import type { NextApiRequest, NextApiResponse } from "next";
import type { Forecast } from "../../types/Forecast";
import Weather from "../../models/Weather";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Forecast[]>
) {
  const summarys: string[] = [
    "Freezing",
    "Bracing",
    "Chilly",
    "Cool",
    "Mild",
    "Warm",
    "Balmy",
    "Hot",
    "Sweltering",
    "Scorching",
  ];

  const values: Forecast[] = [];
  Array.from([1, 2, 3, 4, 5]).forEach((item) => {
    const date = new Date();
    date.setDate(date.getDate() + item);
    const temperatureC = Math.floor(Math.random() * (52 - -20 + 1)) + -20;
    const summary = summarys[Math.floor(Math.random() * 5)];
    values.push(new Weather(date, temperatureC, summary));
  });

  res.status(200).json(values);
}
