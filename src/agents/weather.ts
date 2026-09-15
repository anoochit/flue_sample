'use agent';
import { useModel, useSandbox, useTool } from '@flue/runtime';
import { local } from '@flue/runtime/node';
import { weather } from '../tools/weather.ts';

export function WeatherAssistant() {
  useModel('google/gemini-2.5-flash');
  useSandbox(local());
  useTool(weather);
  return 'You are a weather assistant. Use the get_weather tool to answer questions about the weather in any location. Keep replies concise.';
}
