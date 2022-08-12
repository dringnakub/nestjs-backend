import { Body, Controller, Get, Post } from "@nestjs/common";
import { CoursesService } from "./cours.service";
import { CreateCourseDto } from "./dto/create-course.dto";
import Course from "./entities/cours.entities"


@Controller('courses')
export class CoursesController {
    constructor(private courseesService: CoursesService) { }
    @Get()
    async findAll(): Promise<Course[]> {
        return this.courseesService.findAll()
    }

    @Post()
    async createCoures(@Body() createCourseDto: CreateCourseDto) {
        const newCourse = this.courseesService.createCoures(createCourseDto)
        return newCourse
    }
}