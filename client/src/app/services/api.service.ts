import { Injectable, Signal, signal } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { modelsInterface } from '../pages/models/models.interface'
import { ObjectId } from 'mongoose'
import { Observable } from 'rxjs'

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
    this.http.post(`${this.url}/api/post`, formData).subscribe(() => {})
  }

  getData(): Observable<any> {
    return this.http.get(`${this.url}/api/get`)
  }

  deleteModel(id: ObjectId): Observable<any> {
    return this.http.delete(`${this.url}/api/delete/${id}`)
  }

  searchModelbyName(name: string): Observable<any> {
    return this.http.get(`${this.url}/api/get/${name}`)
  }

  editModel(id: ObjectId, formData: modelsInterface): Observable<any> {
    return this.http.put(`${this.url}/api/put/${id}`, formData)
  }
}
