import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, name: 'header_menu' })
    headerMenu: string;

    @Column({
        nullable: true,
        name: 'sub_menu',
        length: 50
    })
    subMenu: string;

    @Column({
        nullable: true,
        name: 'link_to',
        length: 100
    })
    linkTo: string;

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