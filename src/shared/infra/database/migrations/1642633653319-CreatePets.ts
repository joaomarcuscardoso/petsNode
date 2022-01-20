import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePets1642633653319 implements MigrationInterface {

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
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "species_id",
                        type: "uuid",
    
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
                        name: "FKUsers",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
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
