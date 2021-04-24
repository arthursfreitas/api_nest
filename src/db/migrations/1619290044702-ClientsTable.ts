import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClientsTable1619290044702 implements MigrationInterface {
  name = 'ClientsTable1619290044702';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `client` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `client`');
  }
}
