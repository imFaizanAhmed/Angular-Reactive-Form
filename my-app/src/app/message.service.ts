import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  database : any[]
  constructor() { 
    this.database = []
  }
  getDatabase(){
    return this.database
  }
}
