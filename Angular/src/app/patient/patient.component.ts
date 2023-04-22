import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit{
  data:any;

  constructor(private s1:DataService) {}
  ngOnInit(): void {
    let response=this.s1.patientservice();
    response.subscribe((data1)=>this.data=data1);
  }
}
