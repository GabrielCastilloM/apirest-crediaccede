
const boom = require('@hapi/boom');

class userService {
  constructor() {
    this.users = [];
    this.enpujar()
  }

  enpujar() {
    this.users.push({
      id: 1,
      name:'juan',
      price: 2023
    })
    this.users.push({
      id: 2,
      name:'camilo',
      price: 1500
    })
  }

  find() {
    return new Promise((resolve, ) => {
      setTimeout(() => {
        resolve(this.users);
      }, 1000);
    })
  }

  async findOne(id) {
     //find() retorna el objeto encontrado
    const user = this.users.find(item => item.id === parseInt(id));
    if (!user) {
      throw boom.notFound('product not found');
    }
    if (user.isBlock) {
      throw boom.conflict('user is block')
    }
    return user;
  }

  async create(data) {
    const newUser = {
      ...data
    }
    this.users.push(newUser)
    console.log(this.users);
    return newUser;
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

module.exports = userService;
