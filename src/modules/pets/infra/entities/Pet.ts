import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Specie } from 'modules/species/infra/entities/Specie';
import { Meal } from "modules/meals/infra/entities/Meal";
import { v4 as uuid} from "uuid"

@Entity("pets")
class Pet {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string

  @Column()
  species_id: string

  @JoinColumn({name: "species_id"})
  @OneToOne(() => Specie)
  speciesId: Specie;

  @JoinColumn({name: "meals_id"})
  @OneToMany(() => Meal, meal => meal.id)
  mealsId: Meal;

  @Column()
  number_meals: Int16Array;
  
  @Column()
  restrictions: string;

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