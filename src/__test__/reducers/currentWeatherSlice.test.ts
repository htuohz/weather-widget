import currentWeatherReducer, {
  setCurrentCity,
} from "../../store/reducers/currentWeatherSlice";

it("should return the initial state", () => {
  expect(currentWeatherReducer(undefined, { type: undefined })).toEqual({
    currentCity: "",
    currentWeather: "",
    currentTemprature: 0,
    isMetric: true,
    chanceOfRain: 0,
    windDegree: 0,
    windSpeed: 0,
    humidity: 0,
    pollenCount: 0,
    iconId: "",
    dailyForecast: [],
  });
});

it("should handle a setCurrentcity action", () => {
  const previousState = {
    currentCity: "",
    currentWeather: "",
    currentTemprature: 0,
    isMetric: true,
    chanceOfRain: 0,
    windDegree: 0,
    windSpeed: 0,
    humidity: 0,
    pollenCount: 0,
    iconId: "",
    dailyForecast: [],
  };

  expect(
    currentWeatherReducer(previousState, setCurrentCity("Beijing"))
  ).toEqual({ ...previousState, currentCity: "Beijing" });
});
