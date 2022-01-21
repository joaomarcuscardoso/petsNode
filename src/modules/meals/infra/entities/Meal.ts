import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
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

  @JoinTable({
    name: "pet_id",
    joinColumn: {
      name: "petId"
    },
    inverseJoinColumn: {
      name: "petId"
    }
  })

  @ManyToMany(() => Pet, pet => pet.id)
  petId: Pet

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