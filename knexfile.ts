import { Knex } from 'knex';

interface IKnexConfig {
  [key: string]: Knex.Config;
};

const knexConfig: IKnexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST || "localhost",
      port: 5432,
      user: 'postgres',
      database: 'fullstackjr-database',
      password: 'docker'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}

export default knexConfig;
