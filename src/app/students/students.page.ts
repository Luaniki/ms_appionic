import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailStudentComponent } from '../components/detail-student/detail-student.component';
import { Student } from '../models/student.interface';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, DetailStudentComponent]
})
export class StudentsPage implements OnInit {

  listE: Array<Student> = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickGoCourses():void {
    this.router.navigateByUrl('courses');
  }

  receiveList(list:Array<Student>):void{
    this.listE = list;
  }
}
