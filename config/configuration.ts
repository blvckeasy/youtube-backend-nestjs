export default () => {
  const port = parseInt(process.env.PORT, 10) || 3000
  return {
    port, 
    callback: function () {
      console.log(`Server is listening on ${port} port`);
    },
    database: {
      type: process.env.DB_TYPE || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME || 'postgres',
      synchronize: true,
      logging: true,
      entities: [],
    }
  }
};