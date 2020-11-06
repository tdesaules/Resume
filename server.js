const serve = require('koa-static');
const Koa = require('koa')
const app = new Koa();

app.use(serve('dist'));

app.listen(3000, function () {
  console.log('Server listening on port 3000!\n');
});
