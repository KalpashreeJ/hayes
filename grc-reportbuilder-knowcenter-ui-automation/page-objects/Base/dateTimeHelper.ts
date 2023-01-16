import { addDays, format } from 'date-fns';

export class DateTimeHelper {

    constructor() {

    }

    getFormattedDate(dateValue: string) {

        let NoOfDays = dateValue
        let dateArray = NoOfDays.split(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
        let arrayLength = dateArray.length;
        let updatedDate: Date;
        let currentDate: Date = new Date();
        let dt, mon, yr;
        let formattedDate;

        const addDays = (date: Date, days: number): Date => {
            let result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        };

        const substractDays = (date: Date, days: number): Date => {
            let result = new Date(date);
            result.setDate(result.getDate() - days);
            return result;
        };

        if (NoOfDays.includes('+')) {
            updatedDate = addDays(currentDate, parseInt(dateArray[arrayLength - 1]));
            if (dt < 10) {
                dt = '0' + dt;
            }
            mon = updatedDate.getMonth() + 1;
            if (mon < 10) {
                mon = '0' + mon;
            }
            yr = updatedDate.getFullYear();
            formattedDate = (`${mon}\/${dt}\/${yr}`);
        }
        else if (NoOfDays.includes('-')) {
            updatedDate = substractDays(currentDate, parseInt(dateArray[arrayLength - 1]));
            dt = updatedDate.getDate();
            if (dt < 10) {
                dt = '0' + dt;
            }
            mon = updatedDate.getMonth() + 1;
            if (mon < 10) {
                mon = '0' + mon;
            }
            yr = updatedDate.getFullYear();
            formattedDate = (`${mon}\/${dt}\/${yr}`);
        }
        return formattedDate;
    }
}