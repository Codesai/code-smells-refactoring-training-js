export class Greeting {

    constructor(header, content) {
        this._header = header;
        this._content = content;
    }

    static forBirthdayOf(employee){
        const content = `Happy Birthday, dear ${employee.getFirstName()}!`;
        const header = "Happy Birthday!";
        return new Greeting(header, content);
    }

    header() {
        return this._header;
    }

    content() {
        return this._content;
    }
}