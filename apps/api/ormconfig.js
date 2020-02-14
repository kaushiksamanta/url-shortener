const fs = require('fs');

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: Object.values(fs.readdirSync(__dirname+ '/src/entities')).map((e) => {
    return __dirname + `/src/entities/${e}`;
  }),
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  // Run migrations automatically,
  migrationsRun: true,
  logging: true,
  migrations: Object.values(fs.readdirSync(__dirname+ '/src/migrations')).map((e) => {
    return __dirname + `/src/migrations/${e}`;
  }),
  cli: {
    migrationsDir: '/apps/api/src/migrations',
  },
};
