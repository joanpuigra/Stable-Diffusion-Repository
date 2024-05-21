import { Injectable, signal } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { modelsInterface } from '../pages/models/models.interface'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  apiData = signal<modelsInterface[]>([])

  createData = (formData: modelsInterface) => {
    const currentData = this.apiData()
    currentData.push(formData)
    formData.license = formData.license.filter((value) => value)
    this.http.post(`${this.url}/api/post`, formData).subscribe((data) => {})
  }

  getData = () => {
    return this.http.get(`${this.url}/api/get`)
  }
}
