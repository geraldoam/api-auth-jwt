require('dotenv/config');

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: 'postgres',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['src/app/models/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations/',
  },
};
