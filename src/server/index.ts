import Express from "express";
import cors from "cors";
import { Health } from "../types/api";

const app = Express()

app.use(cors())
// Route
app.get('/api/health', (req, res) => {
  const data: Health = { message: 'ping' }
  res.send(data)
})

// Routeに一致しないRequest
app.use((req, res, next) => {
  res.sendStatus(404)
  next({statusCode: 404})
})

// ErrorRoute
app.use(
  (
    err: { statusCode: number },
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    console.log(err.statusCode)
  }
)
const port = 8888
const host = 'localhost'

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`)
})
