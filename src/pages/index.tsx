import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";
import type { Forecast, ForecastData } from "../types/Forecast";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import themeContext from "../contexts/theme/themeContext";
import { current } from "../types/Forecast";

interface IHomeProps {
  forecastData: Forecast[];
  current: current;
}

const App: NextPage<IHomeProps> = ({ forecastData, current }: IHomeProps) => {
  const { state, setState } = useContext(themeContext);

  useEffect(() => {
    function getCurrentTheme(forecastData: Forecast[]) {
      if (forecastData[0].current?.weather[0].main === "Rain") {
        setState({
          backgroundImg: "https://wallpapercave.com/wp/wp7291883.jpg",
        });
      } else if (forecastData[0].current?.weather[0].main === "Clouds") {
        setState({
          backgroundImg:
            "https://ak.picdn.net/shutterstock/videos/7320100/thumb/1.jpg",
        });
      } else {
        setState({
          backgroundImg:
            "https://t4.ftcdn.net/jpg/03/36/32/85/360_F_336328559_Yj7LbFIlTC9Zj7qbkcJ4IJJ3yWimb4x0.jpg",
        });
      }
    }
    getCurrentTheme(forecastData);
  }, []);

  return (
    <ThemeProvider theme={state}>
      <Home forecastData={forecastData} current={current} />
    </ThemeProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/weatherForecast");
  const forecastResponse: ForecastData = await response.json();
  return {
    props: {
      forecastData: forecastResponse.forecastData,
      current: forecastResponse.current,
    },
  };
};

export default App;
