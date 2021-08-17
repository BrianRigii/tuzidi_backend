import { User } from "src/users/entities/user.entity"
import { VehicleMake } from "./entities/vehicle_make_entity"

export class CreateVehicleDto{
    registration: String
    model : String
    vehicle_make: VehicleMake
    user : User


}