import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentResponse } from '../models/student-response.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudents(): Observable<StudentResponse> {
    return this.http.get<StudentResponse>(environment.studentUrl);
  }
  
}
