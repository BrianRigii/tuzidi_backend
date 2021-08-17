import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Entity()
export class VehicleMake {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.id)
  vehicle: Vehicle;
}
