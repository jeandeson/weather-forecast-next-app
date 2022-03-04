import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
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
  transition: all 2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  max-width: 100%;
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

  @media (max-width: 768px) {
    min-width: 100vw;
    height: 100%;
  }
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
  display: flex;
  align-items: center;
`;

export const WeatherDetailsRight = styled.div`
  text-align: right;
  justify-content: flex-end;
  flex: 1;
  font-size: 16px;
  display: flex;
  align-items: center;

  svg {
    font-size: 56px;
  }

  span {
    text-align: right;
    text-transform: capitalize;
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const DaysOfWeeks = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 50%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DayWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 5px;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    min-width: 100px;
  }

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

    @media (max-width: 768px) {
      width: 100%;
      font-size: 18px;
    }
  }
`;
