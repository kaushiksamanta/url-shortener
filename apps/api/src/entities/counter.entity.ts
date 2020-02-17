import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Counter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  count: number;
}
