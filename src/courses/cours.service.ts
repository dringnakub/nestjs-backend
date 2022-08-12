import { Injectable } from "@nestjs/common";
import Course from "./entities/cours.entities";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";

@Injectable()
export class CoursesService {
    constructor(@InjectRepository(Course)
    private courseRepo: Repository<Course>) { }
    async findAll(): Promise<Course[]> {
        return this.courseRepo.find()
    }

    async createCoures(createCourseDto: CreateCourseDto) {
        return this.courseRepo.save(createCourseDto)
    }
}