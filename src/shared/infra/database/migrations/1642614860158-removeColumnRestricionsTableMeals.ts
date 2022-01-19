import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class removeColumnRestricionsTableMeals1642614860158 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("meals", "restrictions");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("meals", new TableColumn({
            name: "restrictions",
            type: "varchar"
        }))
    }

}
