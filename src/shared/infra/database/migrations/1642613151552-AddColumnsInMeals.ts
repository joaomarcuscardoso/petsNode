import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddColumnsInMeals1642613151552 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("meals", [
            new TableColumn(
                {
                    name: "pet_id",
                    type: "uuid"
                }
            ),
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

        queryRunner.createForeignKey("meals", new TableForeignKey(
            {
                name: "FKPets",
                referencedTableName: "pets",
                referencedColumnNames: ["id"],
                columnNames: ["pet_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("pets", ["pet_id", "created_at", "updated_at"]);
    }


}
