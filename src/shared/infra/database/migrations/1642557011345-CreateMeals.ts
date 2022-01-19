import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMeals1642557011345 implements MigrationInterface {

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
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("meals");
    }

}
