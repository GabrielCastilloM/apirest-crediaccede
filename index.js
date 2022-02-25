const express = require('express');
const cors = require('cors')
const routerApi = require('./routes')

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

/*para poder utilizar lo JSON en la app
Express 4, tiene un analizador de cuerpo incorporado
agregarlo antes de la llamada al router*/
app.use(express.json());

const whitelist = ['http://localhost:3000', 'http://127.0.0.1:5500' ,'https://myapp.co'];
const options = {
  origin: (origin , callback) => {
    if (whitelist.includes(origin) || !origin) {//||permitir localmente
      callback(null, true)
    } else {
      callback (new Error('No permitido'))
    }
  }
}
app.use(cors(options));//para dar permiso a todos los frontend sin options

app.get('/', (req, res) => {
  res.send ('Hola mi server en express')
})

app.get('/nueva-ruta', (req, res) => {
  res.send ('Hola soy una nueva ruta')
})


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, () => {
  console.log('Mi port' + port);
})
