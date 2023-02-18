"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
// const movieRaitng = prompt("На сколько оцените его?", "");
// const lastMoviwTwo= prompt("Один из последних просмотренных фильмов?", "");
// const movieRaitngTwo = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[lastMovie] = movieRaitng;
// personalMovieDB.movies[lastMoviwTwo] = movieRaitngTwo;

for (let i = 0; i < 2; i++) {
    const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
    const movieRaitng = prompt("На сколько оцените его?", "");

    if (lastMovie != '' && movieRaitng != '' && lastMovie != null && movieRaitng != null && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = movieRaitng;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);


