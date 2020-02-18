import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as entities from './src/entities';

const contexts = (require as any).context('../../apps/api/src/migrations/', true, /\.ts$/);
const migrations = contexts.keys()
  .map(modulePath => contexts(modulePath))
  .reduce(
    (result, migrationModule) =>
      result.concat(Object.keys(migrationModule).map(key => migrationModule[key])),
    []
  );

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: Object.values(entities),
  synchronize: false,
  migrationsRun: true,
  logging: true,
  migrations: Object.values(migrations)
};
