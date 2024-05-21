import { Component, OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf, NgOptimizedImage],
  templateUrl: './models.component.html',
  styleUrl: './models.component.css',
})
export class ModelsComponent implements OnInit {
  formData: any = []

  // constructor(private formDataService: FormDataService) {}
  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.ApiService.getData().subscribe((data) => {
      this.formData = data
      this.formData = this.formData.models
      console.log(this.formData)
    })
  }
}
