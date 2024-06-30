import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Input() title: string = '';
  @Input() creationTime: string = '';

  deleteTask() {
    this.deleteTaskEvent.emit(this.creationTime);
  }
}
