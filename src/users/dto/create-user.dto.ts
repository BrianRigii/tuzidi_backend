import { UserType } from "src/user-types/entities/user-type.entity"
import { Vehicle } from "src/vehicle/entities/vehicle.entity"

export class CreateUserDto {
    name : String
    phoneNumber : String
    email: String
    user_type: UserType
    vehicle: Vehicle[]

    
}
