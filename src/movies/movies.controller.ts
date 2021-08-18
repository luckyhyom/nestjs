import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'this will return all movies';
    }

    @Get('/:id')
    getOne(id) {
        return 'this will return a movie';
    }

    @Post()
    create() {
        return 'this will create a movie'
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string) {
        return `this will delete a movie ${movieId}`;
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string) {
        return `this will patch a movie ${movieId}`;
    }

}
