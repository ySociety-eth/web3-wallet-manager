import { FormControl } from "@angular/forms";

export interface RegisterForm {
    email: FormControl<string>;
    name: FormControl<string>;
}