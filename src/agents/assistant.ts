'use agent';
import { useModel, useSandbox, useMcpConnection, useSkill, useTool } from '@flue/runtime';
import { local } from '@flue/runtime/node';
import { weather } from '../tools/weather.ts';
import { itPolicy } from '../skills/it-policy.ts';

export function HelpfulAssistant() {
  useModel('google/gemini-2.5-flash');
  useSandbox(local());
  useMcpConnection({
    name: 'local-mcp',
    url: 'http://localhost:9100/mcp',
    optional: true,
  });
  useSkill(itPolicy);
  useTool(weather);
  return 'You are a helpful assistant. Keep replies short.';
}
