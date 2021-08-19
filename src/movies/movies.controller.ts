import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly movieService: MoviesService) {

    }

    @Get()
    getAll() {
        return this.movieService.getAll();
    }

    @Get('/search')
    search(@Query('year') createdAt: number) {
        return this.movieService.search(createdAt);
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string) {
        return this.movieService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: Movie) {
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string) {
        return this.movieService.remove(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        console.log(updateData,"controller");
        
        return this.movieService.patch(movieId, updateData);
    }

}
