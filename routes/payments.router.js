const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello i am a empoint principal de pagos');
});

router.get('/pago', (req, res) => {
  res.json({
    fecha: 1000,
    valor: 200,
    estado: 'pendiente'
  });
});

module.exports = router;
