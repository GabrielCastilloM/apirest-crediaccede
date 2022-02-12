const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send ('hola Soy la ruta principal de usuarios')
})

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter de usuarios');
});

router.get('/usuario1', (req, res) => {
  res.json ({
    name: 'Gabriel',
    apellido: 'castillo',
    cedula: 10308124
  })
})

module.exports = router;
