export interface current {
  dt: number;
  temp: number;
  feels_like: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}

export interface Forecast {
  date: Date;
  temperatureC: number;
  temperatureF?: number;
  summary: string;
  current?: current;
  main: string;
}

export interface IForecasApiResponse {
  dt: string;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}

export interface ForecastData {
  current?: {
    dt: number;
    temp: number;
    feels_like: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
  };
  forecastData: Forecast[];
}
