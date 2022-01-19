import { Meal } from "@modules/meals/infra/entities/Meal";
import { Specie } from "@modules/species/infra/entities/Specie";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from "uuid"

@Entity("pets")
class Pet {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string

  @Column()
  species_id: string

  @Column()
  restrictions: string

  @JoinColumn({name: "species_id"})
  @OneToOne(() => Specie)
  speciesId: Specie;

  meals_id: string;

  @JoinColumn({name: "meals_id"})
  @OneToMany(() => Meal, meal => meal.id)
  mealsId: Meal;

  @Column()
  number_meals: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { Pet };