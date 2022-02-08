import type { NextPage } from "next";

import { useQuery } from "react-query";

const WEATHER_API_ENDPOINTS = {
  current: "http://api.weatherapi.com/v1/current.json",
  forecast: "http://api.weatherapi.com/v1/forecast.json",
  search: "http://api.weatherapi.com/v1/search.json",
  history: "http://api.weatherapi.com/v1/history.json",
  timezone: "http://api.weatherapi.com/v1/timezone.json",
  sports: "http://api.weatherapi.com/v1/sports.json",
  astronomy: "http://api.weatherapi.com/v1/astronomy.json",
  ip: "http://api.weatherapi.com/v1/ip.json",
};

const fetchSports = async () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!apiKey) {
    throw new Error("Missing API key");
  }

  const url = `${WEATHER_API_ENDPOINTS.sports}?key=${apiKey}&q=London`;

  return fetch(url).then((response) => response.json());
};

const Home: NextPage = () => {
  const { status, data } = useQuery("sports", fetchSports);

  return (
    <div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Home;
