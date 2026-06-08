import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface TaskThread {
  id: string;
  description: string;
  priority: 'CRITICAL' | 'STANDARD' | 'ROUTINE';
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './todo.html'
})
export class Todo {
  private threadsSignal = signal<TaskThread[]>([
    { id: '1', description: 'Learning Angular and Creating some new Projects', priority: 'CRITICAL' },
    { id: '2', description: 'Read Blogs and E-Books for more Knowledge and Vocabulary', priority: 'STANDARD' }
  ]);

  threads = this.threadsSignal.asReadonly();

  totalActiveThreads = computed(() => this.threadsSignal().length);
  criticalCount = computed(() => this.threadsSignal().filter(t => t.priority === 'CRITICAL').length);

  allocateThread(descriptionInput: HTMLInputElement, prioritySelect: HTMLSelectElement) {
    const description = descriptionInput.value.trim();
    const priority = prioritySelect.value as 'CRITICAL' | 'STANDARD' | 'ROUTINE';

    if (!description) return;

    const newThread: TaskThread = {
      id: crypto.randomUUID(),
      description,
      priority
    };

    this.threadsSignal.update(current => [...current, newThread]);
    descriptionInput.value = ''; 
  }

  terminateThread(id: string) {
    this.threadsSignal.update(current => current.filter(t => t.id !== id));
  }
}