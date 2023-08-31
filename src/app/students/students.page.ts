import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailStudentComponent } from '../components/detail-student/detail-student.component';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, DetailStudentComponent]
})
export class StudentsPage implements OnInit {

  constructor(private router:Router) { }

  /*Students: Student[] = [
    {firstname: 'Marco Antonio', lastname: 'Parra', age: 26,  course:'Electiva I'},
    {firstname: 'Marco Antonio', lastname: 'Jimenez', age: 60,  course:'Programación avanzada'},
    {firstname: 'César', lastname: 'Calvo', age: 46, course:'Int. Artificial'},
    {firstname: 'Juan Esteban', lastname: 'Crespo', age: 34, course:'Programación básica'}
  ];
  studentSelected!:Student;
  showDetail:boolean = false;
  
  onDetailBtn(item: Student){
    this.studentSelected = item;
    this.showDetail = true;
  }

  backDetail(value:boolean):void {
    this.showDetail = value;
  }*/

  ngOnInit() {
  }

  onClickGoCourses():void {
    this.router.navigateByUrl('courses');
  }


}
