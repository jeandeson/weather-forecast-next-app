import type { NextApiRequest, NextApiResponse } from "next";

import type { ForecastData, IForecasApiResponse } from "../../types/Forecast";
import Weather from "../../models/Weather";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ForecastData>
) {
  const forecastValues: ForecastData = { forecastData: [] };

  //convert address to geolocation
  const geoLocationData = await fetch(
    "http://www.mapquestapi.com/geocoding/v1/address?key=B81olBGNQ63CFRGiB0PbdyDOlCGcwDb0&street=rua+eloina+s+da+silva&city=lauro+de+freitas&state=ba&postalCode=42739650"
  );
  const geoJson = await geoLocationData.json();
  const { lat, lng } = geoJson.results[0].locations[0].latLng;

  //fetch the weather forecast api using previous gelocation
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=hourly,minutely&appid=965a8bddc823da1c93127fcc5b2d164c`
  );
  const data = await response.json();
  const { adminArea5: cityname } = geoJson.results[0].locations[0];
  const { adminArea3: state } = geoJson.results[0].locations[0];
  const { adminArea1: country } = geoJson.results[0].locations[0];

  forecastValues.current = data.current;
  forecastValues.current!.location = `${cityname}, ${state} ${country}`;

  let index = 0;
  data.daily.forEach((item: IForecasApiResponse) => {
    const date = new Date();
    date.setDate(date.getDate() + index);

    forecastValues.forecastData.push(
      new Weather(
        date,
        Math.round(item.temp.day),
        item.weather[0].description,
        item.weather[0].main
      )
    );

    index++;
  });

  res.status(200).json(forecastValues);
}
