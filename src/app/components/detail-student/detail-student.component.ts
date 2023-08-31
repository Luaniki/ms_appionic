import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class DetailStudentComponent  implements OnInit {

  @Input() student!:Student;

  @Output() backEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  back(): void {
    this.backEvent.emit(false);
  }

}
