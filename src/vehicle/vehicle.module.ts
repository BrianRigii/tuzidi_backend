import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { VehicleMake } from './entities/vehicle_make_entity';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';

@Module({
    imports : [TypeOrmModule.forFeature([Vehicle]) , TypeOrmModule.forFeature([VehicleMake])],
    controllers: [VehicleController],
    providers: [VehicleService]
})
export class VehicleModule {}
