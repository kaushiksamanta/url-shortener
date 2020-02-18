import { MigrationInterface, QueryRunner } from 'typeorm';

export class Url1581910007541 implements MigrationInterface {
    name = 'Url1581910007541'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "counter" ("id" SERIAL NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_012f437b30fcf5a172841392ef3" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "url" ("id" integer NOT NULL, "url" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7421088122ee64b55556dfc3a91" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "url"`, undefined);
        await queryRunner.query(`DROP TABLE "counter"`, undefined);
    }

}
