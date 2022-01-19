import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePets1642557490977 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pets",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true      
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "species_id",
                        type: "uuid",

                    },
                    {
                        name: "meals_id",
                        type: "uuid"
                    },
                    {
                        name: "number_meals",
                        type: "integer"
                    },
                    {
                        name: "restrictions",
                        type: "varchar",
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
                        name: "FKSpecies",
                        referencedTableName: "species",
                        referencedColumnNames: ["id"],
                        columnNames: ["species_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKMeals",
                        referencedTableName: "meals",
                        referencedColumnNames: ["id"],
                        columnNames: ["meals_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pets");
    }
}
