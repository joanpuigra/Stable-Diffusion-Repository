import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-models',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './models.component.html',
    styleUrl: './models.component.css'
})

export class ModelsComponent implements OnInit{
    formData: any;

    constructor(private formDataService: FormDataService) {}

    ngOnInit(): void {
        this.formData = this.formDataService.getData();
        console.log(this.formData);
    }
}
