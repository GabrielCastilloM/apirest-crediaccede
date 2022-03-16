/*esta conexion no es muy adecuada ya que cada vez que llamamos a getConeccion
creamos una nueva conexion*/
const { Client } = require('pg')

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'admin123',
    database: 'dbcrediaccede'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;


