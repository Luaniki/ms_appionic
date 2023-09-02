import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule],
  providers: [StudentService]
})
export class DetailStudentComponent  implements OnInit {

  studentList: Array<Student> = [];

  @Input() student!:Student;

  @Output() backEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() sendList:EventEmitter<Array<Student>> = new EventEmitter

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: (response) => {
        this.studentList = response.data;
        this.sendList.emit(this.studentList);
      }
    });
  }

  back(): void {
    this.backEvent.emit(false);
  }

}
