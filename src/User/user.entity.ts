import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'buyers' })
export class Buyer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
  @Column()
  email: string;
}
