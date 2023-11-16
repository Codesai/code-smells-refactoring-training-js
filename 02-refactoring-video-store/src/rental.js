export class Rental {
    constructor(movie, daysRented) {
        this.movie = movie;
        this.daysRented = daysRented;
    }

    getDaysRented() {
        return this.daysRented;
    }

    getMovie() {
        return this.movie;
    }
}