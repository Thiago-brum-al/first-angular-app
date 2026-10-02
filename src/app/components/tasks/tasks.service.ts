import { Injectable } from "@angular/core";
import type { INewTaskData, ITask } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {

    private tasks: ITask[];

    constructor(){
      this.tasks = this.loadTasks();
    }

    private saveTasks(){
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    private loadTasks(): ITask[] | [] {
      try {
        const raw = localStorage.getItem('tasks');
        if(!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        return []
      }
    };

    getTasks(id: string): ITask[] {
      const tasks = localStorage.getItem('tasks');
      if(tasks && Array.isArray(tasks)){
        this.tasks = JSON.parse(tasks);
      };
      return this.tasks.filter((t) => t.userId === id);
    };

    addTask(taskData: INewTaskData, id: string): void {
      const taskToAdd = {id: new Date().getTime().toString(), userId: id,...taskData};
      this.tasks.unshift(taskToAdd);
      this.saveTasks();
    };

    removeTask(id: string): void {
      this.tasks = this.tasks.filter((current) => current.id !== id);
      this.saveTasks();
    };
};
