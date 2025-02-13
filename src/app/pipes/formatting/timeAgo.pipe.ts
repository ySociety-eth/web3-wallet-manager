import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
    transform(timestamp: number, currentTimestamp: number): string {
        const timestampInMilliseconds = this.toMilliseconds(timestamp);
        
        if(timestampInMilliseconds) {
            const differenceInSeconds = Math.floor((currentTimestamp - timestampInMilliseconds) / 1000);

            if(differenceInSeconds < 30) {
                return 'Just now';
            } else if(differenceInSeconds < 60) {
                return `${differenceInSeconds} seconds ago`;
            } else if(differenceInSeconds < 3600) {
                return Math.floor(differenceInSeconds / 60) === 1 ? '1 minute ago' : `${Math.floor(differenceInSeconds / 60)} minutes ago`
            } else if(differenceInSeconds < 86400) {
                return Math.floor(differenceInSeconds / 3600) === 1 ? '1 hour ago' : `${Math.floor(differenceInSeconds / 3600)} hours ago`
            } else if(differenceInSeconds < 604800) {
                return Math.floor(differenceInSeconds / 86400) === 1 ? '1 day ago' : `${Math.floor(differenceInSeconds / 86400)} days ago`
            } else if(differenceInSeconds < 2592000) {
                return Math.floor(differenceInSeconds / 604800) === 1 ? '1 week ago' : `${Math.floor(differenceInSeconds / 604800)} weeks ago`
            } else if(differenceInSeconds < 31536000) {
                return Math.floor(differenceInSeconds / 2592000) === 1 ? '1 month ago' : `${Math.floor(differenceInSeconds / 2592000)} months ago`
            } else {
                return Math.floor(differenceInSeconds / 31536000) === 1 ? '1 year ago' : `${Math.floor(differenceInSeconds / 31536000)} years ago`
            }
        }
        return 'Invalid timestamp';
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