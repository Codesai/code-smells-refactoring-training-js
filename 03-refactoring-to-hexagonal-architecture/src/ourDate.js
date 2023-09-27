export class OurDate {

    date;

    constructor(yyyyMMdd) {
        const [year, month, day] = yyyyMMdd.split("/");
        this.date = new Date(Number(year), Number(month) - 1, Number(day));
    }

    getDay() {
        return this.date.getDate();
    }

    getMonth() {
        return 1 + this.date.getMonth();
    }

    isSameDay(anotherDate) {
        return anotherDate.getDay() == this.getDay()
            && anotherDate.getMonth() == this.getMonth();
    }
}