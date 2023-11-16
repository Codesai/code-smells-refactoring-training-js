export class Movie {
    static CHILDRENS = 2;
    static REGULAR = 0;
    static NEW_RELEASE = 1;

    constructor(title, priceCode) {
        this.title = title;
        this.priceCode = priceCode;
    }

    getPriceCode() {
        return this.priceCode;
    }

    setPriceCode(code) {
        this.priceCode = code;
    }

    getTitle() {
        return this.title;
    }

}