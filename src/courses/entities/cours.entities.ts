import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb'

@Entity()
class Course {
    @ObjectIdColumn()
    id?: ObjectId;

    @Column()
    number: string;

    @Column()
    name: string;
}

export default Course