import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { UserTypesModule } from './user-types/user-types.module';
import { UserType } from './user-types/entities/user-type.entity';
import { VehicleModule } from './vehicle/vehicle.module';
import { Vehicle } from './vehicle/entities/vehicle.entity';
import { VehicleMake } from './vehicle/entities/vehicle_make_entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root@1234',
      database: 'TUZIDI',
      entities: [ UserType ,User, Vehicle, VehicleMake],
      synchronize: true,
    }),
    
    UserTypesModule, UsersModule, VehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
