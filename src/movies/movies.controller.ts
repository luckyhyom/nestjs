import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/createMovie.dto';
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
    getOne(@Param('id') movieId: number) {
        const movie = this.movieService.getOne(movieId);
        if (!movie) {
            return new NotFoundException('Sorry');
        }
        return ;
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:number) {
        return this.movieService.remove(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId: number, @Body() updateData) {
        console.log(updateData,"controller");
        
        return this.movieService.patch(movieId, updateData);
    }

}
