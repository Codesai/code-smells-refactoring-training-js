import {Greeting} from "./greeting";

export class GreetingMessage {

    constructor(to, greeting) {
        this._to = to;
        this.greeting = greeting;
    }

    static generateForSome(employees) {
        return employees.map(GreetingMessage._generateFor);
    }

    static _generateFor(employee) {
        const greeting = Greeting.forBirthdayOf(employee);
        const recipient = employee.getEmail();
        return new GreetingMessage(recipient, greeting);
    }

    subject() {
        return this.greeting.header();
    }

    text() {
        return this.greeting.content();
    }

    to() {
        return this._to;
    }
}