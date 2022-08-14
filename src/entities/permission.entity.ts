import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, UpdateDateColumn, JoinTable } from "typeorm";
import { Role } from "./role.entity";

export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
}


@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    headerMenu: string;

    @Column()
    subMenu?: string;

    @Column()
    linkTo?: string;
}