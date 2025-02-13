import { Injectable, NgZone, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UpdatedTimeService {
  private timeNow = signal<number>(Date.now());

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.timeNow.set(Date.now());
      }, 1000);
    });
  }

  getTimeNow() {
    return this.timeNow.asReadonly();
  }
}