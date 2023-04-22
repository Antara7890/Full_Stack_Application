import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  inserturl = "http://localhost:9005/insert";
  updateurl = "http://localhost:9005/update";
  deleteurl = "http://localhost:9005/delete";
  patienturl = "http://localhost:9005/patient";

  constructor(private h1 : HttpClient) {}
    insertservice(data:any)
    {
      return this.h1.post(this.inserturl,data);
     }

     updateservice(data:any)
    {
      return this.h1.post(this.updateurl,data);
     }

     deleteservice(data:any)
    {
      return this.h1.post(this.deleteurl,data);
     }

     patientservice()
     {
       return this.h1.get(this.patienturl);
     }
   }


