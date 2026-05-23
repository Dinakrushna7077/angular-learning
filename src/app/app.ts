import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-ng-app');

  userName:string="";
  name:string="";
  email="";
  getUserName(event:Event)
  {
    console.log("Input value:",(event.target as HTMLInputElement).value);
    this.name=(event.target as HTMLInputElement).value;
  }
  setUserName(event:Event)
  {
    this.userName=this.name;
    console.log("UserName:",this.userName);
  }

  setDefaultName()
  {
    this.name="User";
  }

  getEmail(email:string)
  {
    console.log("Email:",email);
  }

  setEmail(email:string)
  {
    this.email=email;
    console.log("Set Email:",this.email);
  }















  // evenHandler(event:MouseEvent)
  // {
  //   console.log("Button :",event.type);
  // }
  // inputEvent(event:Event)
  // {
  //   console.log("Input value:",(event.target as HTMLInputElement).value);
  // }
















  // count=0;

  // countHandler(type:string)
  // {
  //   if(type=='minus'&&this.count>0)
  //   {
  //     this.count--;
  //   }
  //   else if(type=='plus')
  //   {
  //     this.count++;
  //   }
  //   else
  //   {
  //     this.count=0;
  //   }
  // }
}
