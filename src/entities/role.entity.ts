import { Entity, PrimaryGeneratedColumn, Column ,JoinTable, ManyToMany} from "typeorm";
import { Permission } from "./Permission.entity";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roleName: string;

    @Column()
    roleDescription?: string;

    @ManyToMany(() => Permission)
    @JoinTable()
    permissions: Permission[]
}