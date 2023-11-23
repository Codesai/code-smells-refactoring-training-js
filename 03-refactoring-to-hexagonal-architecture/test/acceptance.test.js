import {BirthdayService} from "../src/birthdayService";
import {OurDate} from "../src/ourDate";

describe('Acceptance', () => {

    const FROM = "sender@here.com";
    const SMTP_HOST = "localhost";
    const SMTP_PORT= 25;
    let messagesSent;
    let service;

    beforeEach(() => {
        messagesSent = [];
        service = new class extends BirthdayService {
            _sendMessage(msg, transport) {
                messagesSent.push(msg);
            }
        };
    })

    it('base scenario', () => {
        service.sendGreetings("test/resources/employee_data.txt", new OurDate("2008/10/08"), SMTP_HOST, SMTP_PORT, FROM);

        expect(messagesSent.length).toEqual(1);
        const message = messagesSent[0];
        expect(message.text).toEqual("Happy Birthday, dear John!",);
        expect(message.subject).toEqual("Happy Birthday!");
        expect(message.to).toEqual("john.doe@foobar.com");
    });

    it('will not send emails when nobodys birthday', () => {
        service.sendGreetings("test/resources/employee_data.txt", new OurDate("2008/01/01"), SMTP_HOST, SMTP_PORT, FROM);

        expect(messagesSent.length).toEqual(0);
    });
});