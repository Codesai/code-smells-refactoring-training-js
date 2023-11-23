import {OurDate} from "./ourDate";
import {BirthdayService} from "./birthdayService";

export class SomeServiceClient {

    runService() {
        const service = new BirthdayService();
        try {
            service.sendGreetings("employee_data.txt", new OurDate("2008/10/08"), "localhost", 25, "sender@here.com");
        } catch (e) {
            console.log(e);
        }
    }
}