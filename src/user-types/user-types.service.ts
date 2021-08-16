import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserTypeDto } from './dto/create-user-type.dto';
import { UpdateUserTypeDto } from './dto/update-user-type.dto';
import { UserType } from './entities/user-type.entity';

@Injectable()
export class UserTypesService {
  constructor(
    @InjectRepository(UserType)   
    private UserType : Repository<UserType>
  ){}


  create( createUserTypeDto: CreateUserTypeDto) {
    console.log(createUserTypeDto);
 return this.UserType.save( createUserTypeDto);
  }

  findAll(): Promise<UserType[]> {
    return this.UserType.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} userType`;
  }

  update(id: number, updateUserTypeDto: UpdateUserTypeDto) {
    return `This action updates a #${id} userType`;
  }

  remove(id: number) {
    return `This action removes a #${id} userType`;
  }
}