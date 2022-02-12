const express = require('express');

//importamos archivos de routes
const usersRouter = require('./users.router')
const creditsRouter = require('./credits.routers')
const paymentsRouter = require('./payments.router');

function routerApi(app) {
   //creamos un patch global para todos los enpoints
   const router = express.Router();
   app.use('/api/v1', router)
   //enpoints principales
   router.use('/users', usersRouter);
   router.use('/credits', creditsRouter);
   router.use('/payments', paymentsRouter);
}

module.exports = routerApi;
