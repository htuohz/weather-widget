import { rest } from "msw";

const option = {
  lat: -42.880554,
  lon: 147.324997,
  limit: 1,
  appid: process.env.WEATHER_API_KEY,
};

export const handlers = [
  rest.get(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${option.lat}&lon=${option.lon}&limit=${option.limit}&appid=${option.appid}`,
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            name: "City of London",
            local_names: {
              ar: "مدينة لندن",
              ascii: "City of London",
              bg: "Сити",
              ca: "La City",
              de: "London City",
              el: "Σίτι του Λονδίνου",
              en: "City of London",
              fa: "سیتی لندن",
              feature_name: "City of London",
              fi: "Lontoon City",
              fr: "Cité de Londres",
              gl: "Cidade de Londres",
              he: "הסיטי של לונדון",
              hi: "सिटी ऑफ़ लंदन",
              id: "Kota London",
              it: "Londra",
              ja: "シティ・オブ・ロンドン",
              la: "Civitas Londinium",
              lt: "Londono Sitis",
              pt: "Cidade de Londres",
              ru: "Сити",
              sr: "Сити",
              th: "นครลอนดอน",
              tr: "Londra Şehri",
              vi: "Thành phố Luân Đôn",
              zu: "Idolobha weLondon",
            },
            lat: 51.5128,
            lon: -0.0918,
            country: "GB",
          },
        ])
      );
    }
  ),
  rest.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=london&appid=${process.env.REACT_APP_WEATHER_API_KEY}&limit=5`,
    (req, res, ctx) => {
      return res(
        ctx.json([
          { name: "London", lat: 42.9834, lon: -81.233, country: "GB" },
          { name: "London", lat: 42.9834, lon: -81.233, country: "GB" },
          { name: "London", lat: 42.9834, lon: -81.233, country: "GB" },
          { name: "London", lat: 42.9834, lon: -81.233, country: "GB" },
          { name: "London", lat: 42.9834, lon: -81.233, country: "GB" },
        ])
      );
    }
  ),
];
