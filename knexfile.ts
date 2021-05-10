import dotenv from 'dotenv';

dotenv.config();

export const config = {
    client: 'postgresql',
    connection: {
        database: process.env.POSTGRESQL_DATABASE || 'ecommerce_db',
        user: process.env.POSTGRESQL_USER || 'postgres',
        password: process.env.POSTGRESQL_PASSWORD || 'ecommerce',
        host: process.env.POSTGRESQL_HOST || "localhost",
        port: process.env.POSTGRESQL_SERVICE_PORT || 5432,
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        directory: './migrations',
        table_name: 'knex_migrations',
    },
    debug: false,
};
