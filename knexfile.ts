interface KnexConfig {
  [key: string]: object;
};

const knexConfig: KnexConfig = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
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