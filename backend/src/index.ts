import { Hono } from 'hono';
import { Bindings } from './definitions/bindings';
import { corsMiddleware } from './middleware/cors';
import { MasterService } from './services/masterService';

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', corsMiddleware('*'));

app.get('/', (c) => {
    return c.text('Hello Hono!');
});

app.get('/api/init/master', async (c) => {
    const initMaster = await MasterService.getInitMaster(c.env);
    return c.json(initMaster);
});

export default app;
