import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common'
import { ApiService } from '../../services/api.service'
import { ObjectId } from 'mongoose'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf, NgOptimizedImage, FormsModule],
  templateUrl: './models.component.html',
  styleUrl: './models.component.css',
})
export class ModelsComponent implements OnInit {
  formData: any = []

  // constructor(private formDataService: FormDataService) {}
  constructor(
    private ApiService: ApiService,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadModels()
  }

  loadModels = () => {
    this.ApiService.getData().subscribe((data) => {
      this.formData = data
      this.formData = this.formData.models
      console.log(this.formData)
    })
  }

  deleteModel = (id: ObjectId) => {
    this.ApiService.deleteModel(id).subscribe(() => {
      console.log('Deleted model: ', id)
      this.loadModels()
      alert('Model deleted')
    })
  }

  searchModel = (name: any) => {
    this.ApiService.getData().subscribe((data) => {
      if (name) {
        this.formData = data.models.filter(
          (model: { name: string }) => model.name === name,
        )
        console.log('Searched model: ', this.formData)
      } else {
        this.formData = data.models
        console.log('All models: ', this.formData)
      }
      this.changeDetector.detectChanges()
    })
  }

  editModel = (id: ObjectId, formData: any) => {
    this.ApiService.editModel(id, formData).subscribe(() => {
      console.log('Edited model: ', id)
      this.loadModels()
      alert('Model edited')
    })
  }
}
