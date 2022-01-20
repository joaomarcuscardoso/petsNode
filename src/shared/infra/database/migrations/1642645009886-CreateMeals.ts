import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMeals1642645009886 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "meals",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "meal_time",
                        type: "timestamp"
                    },
                    {
                        name: "restrictions",
                        type: "varchar"
                    },
                    {
                        name: "pet_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"                    
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKPets",
                        referencedTableName: "pets",
                        referencedColumnNames: ["id"],
                        columnNames: ["pet_id"],
                        onUpdate: "SET NULL",
                        onDelete: "SET NULL",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("meals");
    }
}
