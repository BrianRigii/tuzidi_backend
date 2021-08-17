import { UserType } from "src/user-types/entities/user-type.entity";
import { Vehicle } from "src/vehicle/entities/vehicle.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    name : String
    @Column()
    phoneNumber : String
    @Column()
    email : String
    @Column({nullable :true})
    photo_url: String
    @OneToOne(()=> UserType)
    @JoinColumn()
    user_type : UserType
    @OneToMany(()=>Vehicle, vehicle => vehicle.user, {nullable: true})
    vehicle : Vehicle[]

 
    



}
