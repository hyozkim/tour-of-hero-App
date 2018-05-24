import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  // Add method
  add(message: string) {
    this.messages.push(message);
  }
  // Clear method
  clear() {
    this.messages = [];
  }
}
