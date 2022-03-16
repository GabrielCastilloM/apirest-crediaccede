const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send('soy el empoint principal de creditos');
});

router.get('/credito', (req, res) => {
  res.json({
    capital: 1000,
    numeroPagos: 2,
    estado: 'pendiente'
  });
});

module.exports = router;
