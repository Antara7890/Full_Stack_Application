import { Component } from '@angular/core';
import { faPills, faStethoscope, faSyringe } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  faPills=faPills;
  faSyringe=faSyringe;
  faStethoscope=faStethoscope;
}
