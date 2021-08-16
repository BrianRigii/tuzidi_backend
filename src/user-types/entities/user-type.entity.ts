import internal from "stream";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserType {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: String
    
}
