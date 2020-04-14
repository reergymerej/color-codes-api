import Koa from 'koa'
import koaRoute from 'koa-route'

const colors = [
  {id: 1},
  {id: 2},
]

const app = new Koa()

const listColors = async (ctx: Koa.Context) => {
  ctx.body = colors
}

const addColor = async (ctx: Koa.Context) => {
  const newColor = {id: colors.length}
  colors.push(newColor)
  ctx.body = newColor
}

app.use(koaRoute.get('/colors', listColors))
app.use(koaRoute.post('/colors', addColor))

app.listen(3000)
