export class EmailNotSentError extends Error {
    message;
    name;

    constructor(err) {
        super();
        this.message = "email not sent: " + err.message;
        this.name = "EmailNotSentError";
    }
}