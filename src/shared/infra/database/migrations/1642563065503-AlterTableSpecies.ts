import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class AlterTableSpecies1642563065503 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("species", [
            new TableColumn(
                {
                    name: "user_id",
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

        queryRunner.createForeignKey("species", new TableForeignKey(
            {
                name: "FKUsers",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("species", ["user_id", "created_at", "updated_at"]);
    }

}
