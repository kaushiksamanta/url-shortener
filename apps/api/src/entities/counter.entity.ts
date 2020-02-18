import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Counter {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  count: number;
}
