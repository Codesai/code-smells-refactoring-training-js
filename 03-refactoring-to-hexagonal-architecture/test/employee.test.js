import {Employee} from "../src/employee";
import {OurDate} from "../src/ourDate";

describe('Employee', () => {

    it('birthday', () => {
        const employee = new Employee("foo", "bar", "1990/01/31", "a@b.c");

        expect(employee.isBirthday(new OurDate("2008/01/30"))).toBeFalsy();
        expect(employee.isBirthday(new OurDate("2008/01/31"))).toBeTruthy();
    });

});