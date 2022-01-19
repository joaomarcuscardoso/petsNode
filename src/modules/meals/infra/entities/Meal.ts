import { Pet } from "modules/pets/infra/entities/Pet";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";

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




}

export { Meal };