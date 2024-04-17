import {
    Hono
} from "hono";

import { handle } from "hono/vercel"


export const runtime = "edge";


export const app = new Hono().basePath("/api");


app.get('/hono', async (c) => {
    return c.json({ message: "Hello from hono server" });
})


app.post('/hono', async (c) => {
    return c.json({ message: "Hello from hono server : POST" });
}

);





export const GET = handle(app);
export default app as never;