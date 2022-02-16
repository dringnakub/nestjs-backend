import { Controller, Get } from "@nestjs/common";

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(): Array<{
        id: string,
        number: string,
        name: string
    }> {
        return [
            {
                id: "1",
                number: "001",
                name: "OOP"
            },
            {
                id: "2",
                number: "002",
                name: "Java Script"
            },
            {
                id: "3",
                number: "003",
                name: "Type Script"
            }
        ]
    }
}