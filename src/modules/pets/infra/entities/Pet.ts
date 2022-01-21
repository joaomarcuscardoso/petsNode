import { User } from "@modules/accounts/infra/entities/User";
import { Meal } from "@modules/meals/infra/entities/Meal";
import { Specie } from "@modules/species/infra/entities/Specie";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
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
  @ManyToOne(() => Specie, specie => specie.id)
  speciesId: Specie;

  @Column()
  number_meals: number;

  @Column()
  user_id: string;

  @JoinColumn({name: "user_id"})
  @ManyToOne(() => User, user => user.id)
  UserId: User;


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
