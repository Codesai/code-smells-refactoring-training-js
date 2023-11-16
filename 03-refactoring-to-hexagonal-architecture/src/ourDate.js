export class OurDate {

    constructor(date) {
        const [year, month, day] = date.split("/");
        this.date = new Date(Number(year), Number(month) - 1, Number(day));
    }

    isSameDay(anotherDate) {
        return anotherDate._getDay() === this._getDay()
            && anotherDate._getMonth() === this._getMonth();
    }

    _getMonth() {
        return 1 + this.date.getMonth();
    }

    _getDay() {
        return this.date.getDate();
    }
}