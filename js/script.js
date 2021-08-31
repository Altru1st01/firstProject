let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false, 
};

let a = prompt("Последний просмотренный вами фильм?");
let b = +prompt("На сколько оцените этот фильм?");
let c = prompt("Последний просмотренный вами фильм?");
let d = +prompt("На сколько оцените этот фильм?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;