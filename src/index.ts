import Koa from 'koa'



const colors = [
  {id: 1},
  {id: 2},
]


const app = new Koa()

app.use(async ctx => {
  ctx.body = colors
})

app.listen(3000)
