import { User } from "../../../../modules/accounts/infra/entities/User";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("species")
class Specie {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  user_id: string

  @JoinColumn({ name: "user_id"})
  @OneToOne(() => User)
  userId: User;

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

export { Specie };