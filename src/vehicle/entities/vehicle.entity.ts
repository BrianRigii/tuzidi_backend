import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VehicleMake } from './vehicle_make_entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  registration: String;
  @Column({ nullable: true })
  model: String;
  @OneToOne(() => VehicleMake)
  @JoinColumn()
  vehicle_make: VehicleMake;
  @ManyToOne(() => User, (user) => user.vehicle, { nullable: true })
  user: User;
}
