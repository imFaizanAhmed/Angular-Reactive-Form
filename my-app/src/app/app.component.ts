import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  database : any[]
  msg = "";
  constructor(private _messageService: MessageService){
    this.database = [{msg :"hello", sender : 2}]
  }
  ngOnInit(){
    this.database = this._messageService.getDatabase()
  }
  gotmsg(e:Event){   
    this.database.push(e)
  }
}
