import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { MinLength } from "class-validator";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(3)
  name: string;

  @Column()
  @MinLength(10)
  description: string;
}
