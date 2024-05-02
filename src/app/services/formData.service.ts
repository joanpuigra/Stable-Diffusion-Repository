import {Injectable, signal} from '@angular/core';
import {sdModelInterface} from "./sdModel.interface";

@Injectable({
    providedIn: 'root'
})

export class FormDataService {
    formData = signal<sdModelInterface[]>([]);

    submitData = (formData: any) => {
        console.log('Data from form: ', formData);
        this.formData.set(formData);
        console.log('Data from signal: ', formData);
    };

    getData = () => {
        console.log('Form data retrieved: ', this.formData.name);
        return this.formData.asReadonly();
    }
}
