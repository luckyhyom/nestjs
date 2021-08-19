import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];
    
    getAll() {
        return this.movies;
    }

    getOne(id: string): Movie {
        return this.movies.find(movie => movie.id === +id);
    }

    search(year: number): Movie[] {
        return this.movies.filter(movie => movie.year === year);
    }

    create(createdData: Movie): boolean {
        this.movies.push(createdData);
        return true;
    }

    patch(id: string, updateData): Movie {        
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

    remove(id: string): boolean {
        const removed = this.movies.filter(movie => movie.id !== +id);
        this.movies = removed;
        return true;
    }

}
