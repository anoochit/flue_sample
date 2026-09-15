import { createAgentRouter } from '@flue/runtime/routing';
import { Hono } from 'hono';
import { Assistant } from './agents/assistant.ts';

const app = new Hono();

app.get('/health', (c) => c.json({ status: 'ok' }));
app.route('/agents/assistant', createAgentRouter(Assistant));

export default app;
