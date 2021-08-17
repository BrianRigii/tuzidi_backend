import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { Repository } from 'typeorm/repository/Repository';
import { CreateVehicleDto } from './create-vehicle.dto';
import { createVehicleMakeDto } from './create-vehicle_make-dto';

import { Vehicle } from './entities/vehicle.entity';
import { VehicleMake } from './entities/vehicle_make_entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicle: Repository<Vehicle>,
    @InjectRepository(VehicleMake)
    private vehicleMake: Repository<VehicleMake>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.vehicle.save(createVehicleDto);
  }

  createVehicleMake(createVehicleMakeDto: createVehicleMakeDto) {
    return this.vehicleMake.save(createVehicleMakeDto);
  }

  findAll() {
    return this.vehicle.find({ relations: ['vehicle_make'] });
  }

  findAllMakes() {
    return this.vehicleMake.find();
  }
}
