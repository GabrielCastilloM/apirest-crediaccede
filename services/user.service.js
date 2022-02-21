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

  create(data) {
    const newUser = {
      ...data
    }
    this.users.push(newUser)
    console.log(this.users);
    return this.users;
  }

  update(id, changes) {
    const index = this.users.findIndex(item => item.id === parseInt(id));
    if (index === -1) {
      throw new Error('product not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index]
  }

  delete(id) {
    const index = this.users.findIndex(item => item.id === parseInt(id));
    if (index === -1) {
      throw new Error('product not found');
    }
    this.users.splice(index, 1)
    console.log(this.users);
    return {id}
  }


}

module.exports = userService;
