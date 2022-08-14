import { Entity, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
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

    @OneToOne(() => Role)
    @JoinColumn()
    role: number;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: string;

    @Column()
    email: string;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.MALE,
    })
    gender: Gender;

    @Column()
    userImg: string;

    @Column()
    mobileNumber: string;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.ACTIVE,
    })
    status: Status

    @Column({
        unique: true,
        nullable: true,
    })
    lastLogin: Date;

    @CreateDateColumn()
    createdOn: Date;

    @UpdateDateColumn()
    updatedOn: Date;

    @Column()
    createdBy: number;

    @Column()
    updatedBy: number;
}