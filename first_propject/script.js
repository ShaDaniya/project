"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
const movieRaitng = prompt("На сколько оцените его?", "");
const lastMoviwTwo= prompt("Один из последних просмотренных фильмов?", "");
const movieRaitngTwo = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastMovie] = movieRaitng;
personalMovieDB.movies[lastMoviwTwo] = movieRaitngTwo

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);
console.log(personalMovieDB);


