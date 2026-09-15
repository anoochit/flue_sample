import { defineTool } from '@flue/runtime/tool';
import * as v from 'valibot';

export const weather = defineTool({
  name: 'get_weather',
  description:
    'Get the current weather and forecast for a location using wttr.in. Returns temperature, conditions, humidity, wind, and a multi-day forecast.',
  input: v.object({
    location: v.string(),
  }),
  async run({ data }) {
    const res = await fetch(
      `http://wttr.in/${encodeURIComponent(data.location)}?format=j1`,
    );
    if (!res.ok) {
      return `Failed to fetch weather for "${data.location}". Status: ${res.status}`;
    }
    const json: any = await res.json();

    const current = json.current_condition?.[0];
    if (!current) return `No weather data available for "${data.location}".`;

    const currentWeather = [
      `Location: ${json.nearest_area?.[0]?.areaName?.[0]?.value ?? data.location}`,
      `Temperature: ${current.temp_C}°C (${current.temp_F}°F)`,
      `Feels Like: ${current.FeelsLikeC}°C (${current.FeelsLikeF}°F)`,
      `Condition: ${current.weatherDesc?.[0]?.value ?? 'Unknown'}`,
      `Humidity: ${current.humidity}%`,
      `Wind: ${current.windspeedKmph} km/h ${current.winddir16Point}`,
      `Visibility: ${current.visibility} km`,
      `UV Index: ${current.uvIndex}`,
    ].join('\n');

    const forecastLines: string[] = [];
    for (const day of json.weather ?? []) {
      forecastLines.push(
        `${day.date}: ${day.mintempC}°C – ${day.maxtempC}°C, ${day.hourly?.[4]?.weatherDesc?.[0]?.value ?? 'Unknown'}`,
      );
    }

    let output = `**Current Weather**\n${currentWeather}`;
    if (forecastLines.length) {
      output += `\n\n**Forecast**\n${forecastLines.join('\n')}`;
    }
    return output;
  },
});
