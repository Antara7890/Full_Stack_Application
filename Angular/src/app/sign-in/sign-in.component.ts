import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  Submit(registration:any)

  
  {

    console.log("Form Submitted Succesfully");
   
  }
}
