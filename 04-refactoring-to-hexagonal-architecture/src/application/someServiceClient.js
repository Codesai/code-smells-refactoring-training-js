import {OurDate} from "../core/ourDate";
import {BirthdayService} from "./birthdayService";
import {FileEmployeesRepository} from "../infrastructure/repositories/fileEmployeesRepository";

export class SomeServiceClient {

    runService() {
        const filename = "employee_data.txt";
        const service = new BirthdayService(new FileEmployeesRepository(filename));
        try {
            service.sendGreetings(filename,
                new OurDate("2008/10/08"), "localhost", 25);
        } catch (e) {
            console.log(e);
        }
    }
}