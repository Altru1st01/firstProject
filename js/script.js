let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: {

    },
    privat: false,
    
};

let lastMovie = prompt("Последний просмотренный вами фильм?");
let lastMoveRate = +prompt("На сколько оцените этот фильм?");

personalMovieDB.movies.lastMovie.push(lastMoveRate);