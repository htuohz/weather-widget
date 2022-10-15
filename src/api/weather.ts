export function fetchCurrentWeatherFromApi(
  coords: { lat: number; lon: number },
  isMetric: boolean
) {
  return fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${
      coords.lon
    }&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${
      isMetric ? "metric" : "imperial"
    }`
  );
}
