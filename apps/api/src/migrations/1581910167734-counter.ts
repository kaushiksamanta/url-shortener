import { MigrationInterface, QueryRunner } from 'typeorm';

export class Counter1581910167734 implements MigrationInterface {
    name = 'Counter1581910167734';

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`INSERT INTO "counter" ("id", "count") VALUES (1, 9999)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`DELETE FROM "counter" WHERE id = 1`, undefined);
    }
}
