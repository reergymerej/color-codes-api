import Koa from 'koa'
import koaRoute from 'koa-route'
import bodyParser from 'koa-bodyparser'



type Color = {
  id: number;
  value: string;
}

const colors: Color[] = [
  {id: 1, value: 'red'},
  {id: 2, value: 'green'},
]

const app = new Koa()
app.use(bodyParser())

const listColors = async (ctx: Koa.Context) => {
  ctx.body = colors
}

type AddColorReqDTO = {
  value: string;
}

const addColor = async (ctx: Koa.Context) => {
  const body: AddColorReqDTO = ctx.request.body

  // TODO: throw for bad request
  if (body.value) {
    const newColor: Color = {
      id: colors.length,
      value: body.value,
    }
    colors.push(newColor)
    ctx.body = newColor
  }
}

app.use(koaRoute.get('/colors', listColors))
app.use(koaRoute.post('/colors', addColor))

app.listen(3000)
