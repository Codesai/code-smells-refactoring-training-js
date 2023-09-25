import {Movie} from "./movie";

export class Customer {
    name;
    rentals = [];

    constructor(name) {
        this.name = name;
    }

    addRental(rental) {
        this.rentals.push(rental);
    }

    getName() {
        return this.name;
    }

    statement() {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        const rentals = this.rentals.entries();
        let result = "Rental Record for " + this.getName() + "\n";

        for (const [index, each] of rentals) {
            let thisAmount = 0;

            // determines the amount for each line
            switch (each.getMovie().getPriceCode()) {
                case Movie.REGULAR:
                    thisAmount += 2;
                    if (each.getDaysRented() > 2)
                        thisAmount += (each.getDaysRented() - 2) * 1.5;
                    break;
                case Movie.NEW_RELEASE:
                    thisAmount += each.getDaysRented() * 3;
                    break;
                case Movie.CHILDRENS:
                    thisAmount += 1.5;
                    if (each.getDaysRented() > 3)
                        thisAmount += (each.getDaysRented() - 3) * 1.5;
                    break;
            }

            frequentRenterPoints++;

            if (each.getMovie().getPriceCode() === Movie.NEW_RELEASE
                && each.getDaysRented() > 1)
                frequentRenterPoints++;

            result += "\t" + each.getMovie().getTitle() + "\t"
                + thisAmount.toFixed(1) + "\n";
            totalAmount += thisAmount;

        }

        result += "You owed " + totalAmount.toFixed(1) + "\n";
        result += "You earned " + frequentRenterPoints + " frequent renter points\n";

        return result;
    }
}