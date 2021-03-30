import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient) {
    
   }

   public loggedInStatus = new BehaviorSubject(false);

   changeLoggedInStatus(value : any){
     this.loggedInStatus.next(value)
   }

   getJSON() : Observable<any> {
    return this.http.get('../../assets/questions-angular.json')
   }
}
