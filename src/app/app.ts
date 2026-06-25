import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


students=["Dina","abhi","Sahil","Aniket","Rahul"];
//students=[];







/* Computed Signal
  n1=signal(40);
  n2=signal(10);
  sum=computed(() => this.n1() + this.n2());

  displaySum()
  {
    console.log("Updating sum...");
    console.log("Sum: ",this.sum());
    console.log("Updated Sum: ",this.sum());
  }
  updateSignal()
  {
    this.n2.set(this.n2()+50);
  }
    */








  // x=10;
  // count=signal(1);

  // updateSignal(ind:string)
  // {
  //   if(ind==='inc')
  //     this.count.set(this.count()+1)
  //   else
  //     this.count.set(this.count()-1)
  // }

  // constructor()
  // {
  //   effect(()=>{
  //     console.log("signal changed to "+this.count())
  //   })
  // }
  // students=["Dina","abhi","Sahil","Aniket","Rahul"];
  // data=
  // [
  //   {
  //     name:"Dinakrushna Mohanta",
  //     roll:216,
  //     dept:"CS",
  //     hostel:true
  //   },
  //   {
  //     name:"Arun Ku. Mohanta",
  //     roll:218,
  //     dept:"CSE",
  //     hostel:true
  //   },
  //   {
  //     name:"Sakuntala Mohanta",
  //     roll:236,
  //     dept:"ECE",
  //     hostel:true
  //   },
  //   {
  //     name:"Saroj Majhi",
  //     roll:256,
  //     dept:"BCA",
  //     hostel:false
  //   },
  //   {
  //     name:"Tofan Ku Pradhan",
  //     roll:226,
  //     dept:"B-Tech",
  //     hostel:true
  //   }
  // ]
  
  
  
  
  
  
  
  
  
  
  
  
  // color="white";
  // inpColor="gray";
  // handleInp(event:Event)
  // {
  //   this.inpColor=(event.target as HTMLInputElement).value.toLowerCase();
  //   this.handleColor(this.inpColor)
  // }
  

  // handleColor(col:string)
  // {
  //   this.color=col;
  // }


























//   protected readonly title = signal('first-ng-app');
//   color="white";
//   inputColor="";
  
//  handleColor(clr:string)
//  {
//   this.color=clr;
//  }







  // x=0;
  // theme="Light Mode";
  // changeTheme(appTheme: HTMLElement)
  // {
  //   if(this.theme=="Dark Mode")
  //     {
  //       this.theme="Light Mode";
  //       appTheme.classList.add("bg-dark","text-light");
  //       appTheme.classList.remove("bg-light","text-dark");
  //     }
  //   else
  //   {
  //     this.theme="Dark Mode";
  //     appTheme.classList.add("bg-light","text-dark");
  //     appTheme.classList.remove("bg-dark","text-light");
  //   }

  // }
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
