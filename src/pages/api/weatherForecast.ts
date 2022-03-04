import type { NextApiRequest, NextApiResponse } from "next";
import type {
  Forecast,
  ForecastData,
  IForecasApiResponse,
} from "../../types/Forecast";
import Weather from "../../models/Weather";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ForecastData>
) {
  // const summarys: string[] = [
  //   "Freezing",
  //   "Bracing",
  //   "Chilly",
  //   "Cool",
  //   "Mild",
  //   "Warm",
  //   "Balmy",
  //   "Hot",
  //   "Sweltering",
  //   "Scorching",
  // ];

  const values: ForecastData = { forecastData: [] };

  // Array.from([1, 2, 3, 4, 5]).forEach((item) => {
  //   const date = new Date();
  //   date.setDate(date.getDate() + item);
  //   const temperatureC = Math.floor(Math.random() * (52 - -20 + 1)) + -20;
  //   const summary = summarys[Math.floor(Math.random() * 5)];
  //   values.push(new Weather(date, temperatureC, summary));
  // });

  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=metric&exclude=hourly,minutely&appid=965a8bddc823da1c93127fcc5b2d164c"
  );

  const data = await response.json();
  values.current = data.current;
  let index = 0;
  data.daily.forEach((item: IForecasApiResponse) => {
    const date = new Date();
    date.setDate(date.getDate() + index);

    values.forecastData.push(
      new Weather(
        date,
        item.temp.day,
        item.weather[0].description,
        item.weather[0].main
      )
    );

    index++;
  });

  res.status(200).json(values);
}
