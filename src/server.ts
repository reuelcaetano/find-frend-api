import { app } from './app'

app.get('/', (req, res) => {
  return res.send('hello')
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP server running!')
})