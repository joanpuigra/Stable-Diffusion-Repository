import { Injectable, signal } from "@angular/core";
import { modelsInterface } from "../pages/models/models.interface";

@Injectable({
  providedIn: "root",
})
export class FormDataService {
  private formData = signal<modelsInterface[]>([]);

  submitData = (formData: modelsInterface) => {
    const currentData = this.formData();
    currentData.push(formData);
    formData.license = formData.license.filter((value) => value);
    this.formData.set(currentData);
  };

  getData = () => {
    return this.formData();
  };
}
