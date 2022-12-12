import express from 'express'
import diaryRouter from './routes/diaries'
const app = express()

app.use(express.json()) // middleware que transforma la req.body a un json

app.use('/api/diaries', diaryRouter) // Middlewares

app.get('/ping', (_req, res) => {
  console.log('someone pinged to here')
  res.send('pong')
})

app.listen(3000, () => {
  console.log('server listening on http://localhost:3000/api/diaries')
})
