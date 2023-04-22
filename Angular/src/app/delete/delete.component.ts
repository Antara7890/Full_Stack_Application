import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{

  constructor(private s1:DataService) { }
  ngOnInit(): void {
  }
  deletedata(deleteform:{value:any;})
{
    return this.s1.deleteservice(deleteform.value).subscribe();
}
}
