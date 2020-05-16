import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getRaptors()
  }

getRaptors(){
  let tempObservable = this._http.get('/raptors')
  tempObservable.subscribe(data => console.log('retrieved Raptors', data));
}
}
