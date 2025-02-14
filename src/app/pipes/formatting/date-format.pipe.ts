import { DatePipe } from "@angular/common";
import { inject, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dateFormat',
    standalone: true
})
export class DateFormatPipe implements PipeTransform {
    private angularDateFormater = inject(DatePipe);
    transform(value: number | string, format: string = 'y-M-d h:m a') {
        const valueInMilliseconds = this.toMilliseconds(value);

        return this.angularDateFormater.transform(valueInMilliseconds, format);
    }

    toMilliseconds(input: string | number): number | null{
        if(typeof input === 'number' || (typeof input === 'string' && this.isNumericString(input))) {
            const num = Number(input);
            const totalAlgarism = num.toString().length;
            return totalAlgarism === 13 ? num : num * 1000; // convert to milliseconds if it's in seconds
        } else {
            const date = new Date(input);
            return isNaN(date.getTime()) ? null : date.getTime();
        }
    }

    isNumericString(input: string) { // verifies if input is a numeric string, like "1000000000560"
        return /^\d+$/.test(input);
    }
}