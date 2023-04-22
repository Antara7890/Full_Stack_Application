import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private s1:DataService) {}
  ngOnInit(): void {
  }
  insertdata(insertform:{value:any;})
{
    return this.s1.insertservice(insertform.value).subscribe();
}
}
