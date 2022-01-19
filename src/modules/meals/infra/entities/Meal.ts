import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Pet } from "../../../pets/infra/entities/Pet";

@Entity("meals")
class Meal {
  @PrimaryColumn()
  id: string

  @Column()
  description: string;

  @Column()
  meal_time: Date;

  @Column()
  pet_id: string;

  @JoinColumn({name: "pet_id"})
  @OneToMany(() => Pet, pet => pet.id)
  petId: Pet;

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

export { Meal };