import { Column, Entity, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";


export class User {
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    name : String
    @Column()
    phoneNumber : string
    @Column()
    email : String
    @Column()
    photoUrl: string
 
    



}
