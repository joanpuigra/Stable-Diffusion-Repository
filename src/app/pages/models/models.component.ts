import { Component, OnInit } from "@angular/core";
import { FormDataService } from "../../services/formData.service";
import { RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: "app-models",
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf],
  templateUrl: "./models.component.html",
  styleUrl: "./models.component.css",
})
export class ModelsComponent implements OnInit {
  formData: any = [];

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    const currentData = this.formDataService.getData();
    if (!currentData || currentData.length === 0) {
      console.log("No data found");
      return;
    } else {
      console.log("Values: ", currentData);
      this.formData = currentData;
    }
  }
}
