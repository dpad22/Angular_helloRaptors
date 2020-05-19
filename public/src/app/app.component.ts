import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Raptors API';
  raptors: any = [];
  raptor = "";
  newRaptor: any;
  editRaptor: any;
  showClicked = false;
  newClicked = false;
  editClicked = false;
  editTog: boolean = false;

  constructor(private _httpService: HttpService){

  }
  
ngOnInit(){
  console.log("We are live")
}
getRaptorsFromService(){
  let observable = this._httpService.getRaptors();
  observable.subscribe((data)=>{
    // console.log(data)
    this.raptors = data;
  });
}
raptorInfo(raptor){
  this.raptor = raptor;
  this.showClicked = true;
}

createRaptor(){
  let observable = this._httpService.newRaptor(this.newRaptor);
  observable.subscribe(data => {
  this.newRaptor = {name:"", age:null, sex:"", color:""};
  console.log("created"+ this.newRaptor);
  this.newClicked = true;
    // this.getRaptorsFromService();
  });
}
onDelete(raptor) {
  let observable = this._httpService.deleteRaptor(raptor);
  observable.subscribe((data)=> {
    console.log("deleting Raptor")
    this.getRaptorsFromService();
  });
}

editForm(raptor){
  this.editRaptor = {_id: raptor._id, name: raptor.name, age: raptor.age, sex: raptor.sex, color: raptor.color}
  this.editTog = true;
}

toEdit() {
  let observable = this._httpService.editRaptor(this.editRaptor);
  observable.subscribe(data=> {
  this.editTog = false;
  this.getRaptorsFromService();
  console.log("Submitted edit");
})

}

}
