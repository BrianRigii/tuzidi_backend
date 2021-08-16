import { Module } from '@nestjs/common';
import { UserTypesService } from './user-types.service';
import { UserTypesController } from './user-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { UserType } from './entities/user-type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserType])],
  controllers: [UserTypesController],
  providers: [UserTypesService]
})
export class UserTypesModule {}
