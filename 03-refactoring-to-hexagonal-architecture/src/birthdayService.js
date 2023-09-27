import {OurDate} from "./ourDate";
import {Employee} from "./employee";
import * as fs from "fs";
import nodemailer from "nodemailer";
import {EmailNotSentError} from "./emailNotSentError";

export class BirthdayService {

    sendGreetings(fileName, ourDate, smtpHost, smtpPort) {
        const data = fs.readFileSync(fileName, {encoding: 'utf8'});
        data.split(/\r?\n/).forEach((str) => {
            let employeeData = str.split(", ");
            const employee = new Employee(employeeData[1], employeeData[0],
                employeeData[2], employeeData[3]);
            if (employee.isBirthday(ourDate)) {
                const recipient = employee.getEmail();
                const body = "Happy Birthday, dear %NAME%!".replace("%NAME%",
                    employee.getFirstName());
                const subject = "Happy Birthday!";
                this.sendTheMessage(smtpHost, smtpPort, "sender@here.com", subject,
                    body, recipient);
            }
        });
    }

    sendTheMessage(smtpHost, smtpPort, sender,
                           subject, body, recipient) {
        // Create a mail session
        const transport = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
        })

        // Construct the message
        const msg = {
            from: sender,
            to: recipient,
            subject: subject,
            text: body
        };

        // Send the message
        this.sendMessage(msg, transport);
    }

    // made protected for testing :-(
    sendMessage(msg, transport) {
        transport.sendMail(msg, (err) => {
            if (err) throw new EmailNotSentError(err);
        });
    }

    main(args) {
        const service = new BirthdayService();
        try {
            service.sendGreetings("employee_data.txt",
                new OurDate("2008/10/08"), "localhost", 25);
        } catch (e) {
            console.log(e);
        }
    }
}