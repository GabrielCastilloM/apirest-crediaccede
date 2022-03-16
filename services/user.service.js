
const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool')

class UserService {
  constructor() {
    this.pool = pool;
    //por si hay un error en la coneccion
    this.pool.on('error', (err) => console.error(err));
  }

  async create(data) {
    const newUser = {
      ...data
    }
    this.users.push(newUser)
    console.log(this.users);
    return newUser;
  }

  async find() {
    const query = 'SELECT * FROM users';
    const rta = await this.pool.query(query)
    return rta.rows;
  }

  async findOne(id) {
     //find() retorna el objeto encontrado
    const user = this.users.find(item => item.id === parseInt(id));
    if (!user) {
      throw boom.notFound('user not found');
    }
    if (user.isBlock) {
      throw boom.conflict('user is block')
    }
    return user;
  }



  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === parseInt(id));
    if (index === -1) {
      throw boom.notFound('user not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index]
  }

  async delete(id) {
    const index = this.users.findIndex(item => item.id === parseInt(id));
    if (index === -1) {
      throw boom.notFound('user not found');
    }
    this.users.splice(index, 1)
    console.log(this.users);
    return {id}
  }
}

module.exports = UserService;
