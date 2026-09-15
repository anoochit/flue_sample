import { createAgentRouter } from '@flue/runtime/routing';
import { Hono } from 'hono';
import { HelpfulAssistant } from './agents/assistant.ts';

const app = new Hono();

app.get('/health', (c) => c.json({ status: 'ok' }));
app.route('/agents/assistant', createAgentRouter(HelpfulAssistant));

export default app;
