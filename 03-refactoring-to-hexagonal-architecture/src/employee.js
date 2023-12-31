import {OurDate} from "./ourDate";

export class Employee {

    constructor(firstName, lastName, birthDate, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new OurDate(birthDate);
        this.email = email;
    }

    isBirthday(today) {
        return today.isSameDay(this.birthDate);
    }

    getEmail() {
        return this.email;
    }

    getFirstName() {
        return this.firstName;
    }
}