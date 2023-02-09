import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatalistService {

  constructor() { }

  Reason(){
    return [
      {
        id:1,
        name:"Business"
      },
      {
        id:2,
        name:"Transport"
      },
      {
        id:3,
        name:"Dealership"
      }
    ]
  }
}
