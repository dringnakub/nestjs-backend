import { Entity, Column, CreateDateColumn, UpdateDateColumn,PrimaryColumn, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { Role } from "./role.entity";

export enum Gender {
    MALE = "male",
    FEMALE = 'female'
}

export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Role)
    @JoinColumn({ name: 'role_id' })
    role: number;

    @Column({ length: 30, name: "user_name" })
    userName: string;

    @Column({ length: 100 })
    password: string;

    @Column({ length: 50, name: "first_name" })
    firstName: string;

    @Column({ length: 50, name: "last_name" })
    lastName: string;

    @Column({ name: "date_of_birth" })
    dateOfBirth: string;

    @Column({ length: 50 })
    email: string;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.MALE,
    })
    gender: Gender;

    @Column({ length: 100, name: "user_img" })
    userImg: string;

    @Column({ length: 10, name: "mobile_number" })
    mobileNumber: string;

    @Column({
        nullable: true,
        name: 'last_login'
    })
    lastLogin: Date;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.ACTIVE,
    })
    status: Status

    @CreateDateColumn({ name: 'created_on' })
    createdOn: Date;

    @UpdateDateColumn({
        nullable: true,
        name: 'updated_on'
    })
    updatedOn: Date;

    @Column({ name: 'created_by' })
    createdBy: number;

    @Column({
        nullable: true,
        name: 'updated_by'
    })
    updatedBy: number;
}