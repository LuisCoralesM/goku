import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  level: number;

  @Column()
  exp: number;

  @Column()
  expToNextLevel: number;

  @Column()
  expPerDay: number;

  @Column("date")
  startDay: string;

  @Column("date")
  goalDay: string;

  @Column()
  streak: number;

  @Column()
  missingDays: number;

  @Column()
  imageUrl: string;

  @Column("json", { nullable: true })
  todo?: Todo[];
}

export type Todo = {
  description: string;
  date: string;
  done: boolean;
};


