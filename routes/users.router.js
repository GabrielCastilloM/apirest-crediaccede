const express = require('express');
const router = express.Router();

const UserService = require('../services/user.service');
const service = new UserService();

router.get('/', (req, res) => {
  res.send ('hola Soy la ruta principal de usuarios')
})

router.get('/usuario1', (req, res) => {
  res.json ({
    name: 'Gabriel',
    apellido: 'castillo',
    cedula: 10308124
  })
})

//para recibir paramentros por url utilizando params
router.get('/params/:name', (req, res) => {
  const name = req.params.name
  res.send(`hola mi nombre es ${name}`)
})
/*para recibir paramentros por url utilizando query pasamos la url asi
//http://localhost:3000/api/v1/users/query?limit=10&offset=200 esto se utiliza para la paginacion*/
router.get('/query', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros')
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const user = service.update(id, body)
  res.json(user)
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  const user = service.delete(id)
  res.json(user)
})


module.exports = router;

