import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, FormsModule, CommonModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task-list';
  newTaskTitle = '';
  tasks: any = [];

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.push({ title: this.newTaskTitle.trim(), creationTime: this.getCurrentDateTime() });
      this.newTaskTitle = '';
    }
  }
  deleteTask(taskCreationTime: string) {
    this.tasks = this.tasks.filter((e: any) => e.creationTime != taskCreationTime);
  }

  getCurrentDateTime(): string {
    const now = new Date();
  
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so we add 1
    const day = String(now.getDate()).padStart(2, '0');
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  
}
