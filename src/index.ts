import Koa from 'koa'
import koaRoute from 'koa-route'




const colors = [
  {id: 1},
  {id: 2},
]


const app = new Koa()


const listColors = async ctx => {
  ctx.body = colors
}

app.use(koaRoute.get('/colors', listColors))

app.listen(3000)
