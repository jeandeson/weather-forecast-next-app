import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(rgba(218, 205, 205, 0.1), black),
    url(${(props) => props.theme.backgroundImg});
  background-size: cover;
  animation: opacity 1s forwards ease;
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  width: 500px;

  background-attachment: fixed;
  background-size: 100%;
  text-align: center;
  padding: 20px;
  font-size: 12px;
  border-radius: 10px;
  position: relative;
  background-size: 100%;

  transition: all 1s ease-in-out;

  /* background: rgba(109, 218, 252, 0.28); */
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(109, 218, 252, 0.28);
`;

export const CardHead = styled.div`
  h1 {
    font-size: 24px;
  }

  button {
    display: flex;
    font-size: 24px;
    color: white;
    background: none;
    border: none;
    padding: 5px;
    border-radius: 50%;
    :hover {
      background-color: rgba(255, 255, 255, 0.5);
      cursor: pointer;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const WeatherDetails = styled.div`
  display: flex;
`;

export const WeatherDetailsLeft = styled.div`
  text-align: left;
  flex: 1;
  font-size: 36px;
`;

export const WeatherDetailsRight = styled.div`
  text-align: right;
  justify-content: flex-end;
  flex: 1;
  font-size: 16px;
  display: flex;

  svg {
    font-size: 36px;
  }
  span {
    text-align: right;
  }
`;

export const DaysOfWeeks = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50%;
`;

export const DayWrapper = styled.div`
  flex: 1 1 100px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 5px;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;

  div {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;

    svg {
      font-size: 30px;
    }
  }
`;

export const Footer = styled.div`
  button {
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    :hover {
      cursor: pointer;
    }
  }
`;
