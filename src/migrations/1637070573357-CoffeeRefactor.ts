import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1637070573357 implements MigrationInterface {
  // instruc what needs to changed and how
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE 'coffee' RENAME COLUMN "name" TO "title" `,
    );
  }

  // undo or rollback
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE 'coffee' RENAME COLUMN "title" TO "name" `,
    );
  }
}
