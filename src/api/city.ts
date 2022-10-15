export function fetchCityNameByCoordsFromApi(coords: {
  lat: number;
  lon: number;
}) {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&limit=1`
  );
}

export function fetchSuggestionsByNameFromApi(name: string) {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${name}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&limit=5`
  );
}
