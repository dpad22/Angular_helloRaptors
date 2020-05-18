import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Raptors API';
  raptors = [];
  raptor = "";
  newRaptor: any;
  editRaptor: any;
  editTog: boolean = false;

  constructor(private _httpService: HttpService){

  }
  
ngOnInit(){
  this.getRaptorsFromService();
  this.newRaptor = {name:"", age:0,sex:"", color:""};
}
getRaptorsFromService(){
  let observable = this._httpService.getRaptors();
  observable.subscribe((data)=>{
    this.raptors = data["data"];
  });
}
createRaptor(){
  let observable = this._httpService.newRaptor(this.newRaptor);
  observable.subscribe((data)=> {
    this.newRaptor = {name:"", age:0,sex:"", color:""};
    this.getRaptorsFromService();
  });
}
onDelete(raptor) {
  let observable = this._httpService.deleteRaptor(raptor);
  observable.subscribe((data)=> {
    this.getRaptorsFromService();
  });
}
toEdit(raptor) {
  let observable = this._httpService.editRaptor(raptor);
  observable.subscribe((data)=> {
    this.getRaptorsFromService();
  });
}
}
