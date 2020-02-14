import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Url1581652637001 } from './src/migrations/1581652637001-url';
import * as entities from './src/entities';
import * as migrations from './src/migrations';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: Object.values(entities),
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: true,
  migrations: Object.values(migrations)
};
