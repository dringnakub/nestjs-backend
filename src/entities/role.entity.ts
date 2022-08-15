import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Permission } from "./Permission.entity";
import { Status } from "src/enums/status.enum";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, name: 'role_name' })
    roleName: string;

    @Column({ length: 200, name: 'role_description' })
    roleDescription: string;

    @ManyToMany(() => Permission)
    @JoinTable()
    permissions: Permission[]

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