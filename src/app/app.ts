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

  theme="Light Mode";
  changeTheme(appTheme: HTMLElement)
  {
    if(this.theme=="Dark Mode")
      {
        this.theme="Light Mode";
        appTheme.classList.add("bg-dark","text-light");
        appTheme.classList.remove("bg-light","text-dark");
      }
    else
    {
      this.theme="Dark Mode";
      appTheme.classList.add("bg-light","text-dark");
      appTheme.classList.remove("bg-dark","text-light");
    }

  }
  // display=false;

  // toggleButton()
  // {
  //   this.display=!this.display;
  // }

  // name:string="";
  // pin="";
  // address="";
  // village="";
  // panchayat="";
  // district="";
  // perName:string="";
  // perpin="";
  // perAddress="";
  // perVillage="";
  // perPanchayat="";
  // perDistrict="";

  // getInput(event:Event,id:string)
  // {
  //   if(id=="name")
  //   {
  //     this.name=(event.target as HTMLInputElement).value;
  //   }
  //   else if(id=="pinCode")
  //   {
  //     this.pin=((event.target as HTMLInputElement).value);
  //   }
  //   else if(id=="permanentAddress")
  //   {
  //     this.address=(event.target as HTMLInputElement).value;
  //   }
  //   else if(id=="village")
  //   {
  //     this.village=(event.target as HTMLInputElement).value;
  //   }
  //   else if(id=="panchayat")
  //   {
  //     this.panchayat=(event.target as HTMLInputElement).value;
  //   }
  //   else if(id=="district")
  //   {
  //     this.district=(event.target as HTMLInputElement).value;
  //   }
  // }
  // setPermanentAddress(name:string,permanentAddress:string,pinCode:string,village:string,panchayat:string,district:string)
  // {
  //   this.perName=name;
  //   this.perAddress=permanentAddress;
  //   this.perPanchayat=panchayat;
  //   this.perDistrict=district;
  //   this.perpin=pinCode;
  //   this.perVillage=village;
  // }


  // userName:string="";
  // name:string="";
  // email="";
  // getUserName(event:Event)
  // {
  //   console.log("Input value:",(event.target as HTMLInputElement).value);
  //   this.name=(event.target as HTMLInputElement).value;
  // }
  // setUserName(event:Event)
  // {
  //   this.userName=this.name;
  //   console.log("UserName:",this.userName);
  // }

  // setDefaultName()
  // {
  //   this.name="User";
  // }

  // getEmail(email:string)
  // {
  //   console.log("Email:",email);
  // }

  // setEmail(email:string)
  // {
  //   this.email=email;
  //   console.log("Set Email:",this.email);
  // }















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
