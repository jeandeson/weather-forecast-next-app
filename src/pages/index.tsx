import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";
import type { Forecast } from "../types/Forecast";
import Home from "./Home";
import { ThemeProvider } from "styled-components";
import themeContext from "../contexts/theme/themeContext";

interface IHomeProps {
  forecastData: Forecast[];
}

const App: NextPage<IHomeProps> = ({ forecastData }: IHomeProps) => {
  const { state, setState } = useContext(themeContext);

  useEffect(() => {
    function getCurrentTheme(forecastData: Forecast[]) {
      if (forecastData[0].temperatureC <= 0) {
        setState({
          backgroundImg: "https://wallpapercave.com/wp/wp7291883.jpg",
        });
      } else if (forecastData[0].temperatureC <= 24) {
        setState({
          backgroundImg:
            "https://ak.picdn.net/shutterstock/videos/7320100/thumb/1.jpg",
        });
      } else {
        setState({
          backgroundImg:
            "https://cdn.pixabay.com/photo/2016/09/28/05/12/sunny-sky-1699784_1280.jpg",
        });
      }
    }
    getCurrentTheme(forecastData);
  }, []);

  return (
    <ThemeProvider theme={state}>
      <Home forecastData={forecastData} />
    </ThemeProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/weatherForecast");
  const forecastData: Forecast[] = await response.json();
  return {
    props: {
      forecastData,
    },
  };
};

export default App;
