import {Injectable, signal} from '@angular/core';
import {modelsInterface} from "../pages/models/models.interface";

@Injectable({
    providedIn: 'root'
})

export class FormDataService {
    private formData = signal<modelsInterface[]>([]);

    submitData = (formData: any) => {
        this.formData.set(formData);
    };

    getData = () => {
        console.log('Data from get: ', this.formData());
        return this.formData();
    }
}
