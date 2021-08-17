import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateVehicleDto } from './create-vehicle.dto';
import { createVehicleMakeDto } from './create-vehicle_make-dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Post('/make')
  createMake(@Body() createVehicleMakeDto: createVehicleMakeDto) {
    this.vehicleService.createVehicleMake(createVehicleMakeDto);
  }

  @Get('/make')
  findAllMakes() {
    return this.vehicleService.findAllMakes();
  }
}
