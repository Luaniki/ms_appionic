import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class DetailCourseComponent  implements OnInit {

  @Input() course!:Course;

  @Output() backEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  back(): void {
    this.backEvent.emit(false);
  }

}
