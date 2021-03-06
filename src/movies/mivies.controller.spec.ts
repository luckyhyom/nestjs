import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('movieService', () => {
    let service: MoviesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MoviesService],
        }).compile();

        service = module.get<MoviesService>(MoviesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getAll', () => {
        it('should return an Array', () => {
            const result = service.getAll();
            expect(result).toBeInstanceOf(Array);
        })
    });

    describe('getOne', () => {
        it('should return a movie', () => {
            service.create({
                title: 'test',
                year:2020,
                genres: ['test'],
            })
            const movie = service.getOne(1);

            expect(movie).toBeDefined();
        });

        it('should throw 404 error', () => {
            try {
                service.getOne(999);
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
            }
        })
    })

})
