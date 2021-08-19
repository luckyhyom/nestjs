import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/createMovie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];
    
    getAll() {
        return this.movies;
    }

    getOne(id: number): Movie {
        return this.movies.find(movie => movie.id === id);
    }

    search(year: number): Movie[] {
        return this.movies.filter(movie => movie.year === year);
    }

    create(createdData: CreateMovieDto): Movie {
        const created = {
            id: this.movies.length + 1,
            ...createdData,
            createdAt: new Date()
        }
        this.movies.push(created);
        return created;
    }

    patch(id: number, updateData): Movie {        
        let updated = this.getOne(id);
        if (!updated) {
            return;
        }

        this.remove(id);
        updated = {
            ...updated,
            ...updateData,
            updatedAt: new Date(),
        }
        this.movies = [ updated, ...this.movies];
        return updated;
    }

    remove(id: number): boolean {
        const removed = this.movies.filter(movie => movie.id !== id);
        this.movies = removed;
        return true;
    }

}
