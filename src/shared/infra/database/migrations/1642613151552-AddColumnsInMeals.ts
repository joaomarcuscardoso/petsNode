import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsInMeals1642613151552 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("meals", [
            new TableColumn(
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"                    
                }
            ),
            new TableColumn(
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable: true
                }
            )
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("pets", ["created_at", "updated_at"]);
    }


}
