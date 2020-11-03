const serve = require('koa-static');
const koa = require('koa')
const app = new koa();

app.use(serve('dist'));

app.listen(3000, function () {
  console.log('Server listening on port 3000!\n');
});
