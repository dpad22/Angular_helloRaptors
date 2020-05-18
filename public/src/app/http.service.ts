import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getRaptors();
  }

getRaptors(){
  return this._http.get("/raptorsApi")
}

getRaptorsById(id: string) {
  return this._http.get("/raptorsApi/:id");
}

newRaptor(newRaptor) {
  return this._http.post("/raptorsApi", newRaptor);
}

editRaptor(raptor) {
  return this._http.get("/raptorsApi/:id",raptor);

}

deleteRaptor(raptor){
  return this._http.delete(`/raptorsApi/${raptor._id}`,raptor)
}

}
