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
onDelete(id:any) {
  console.log("deleting below")
  console.log(id)
  let observable = this._httpService.deleteRaptor(id._id);
  observable.subscribe(data => {
    // console.log("delete", data)
    this.getRaptorsFromService();
    console.log("deleting Raptor");
  });
}

editForm(raptor){
  this.editRaptor = {_id: raptor._id, name: raptor.name, age: raptor.age, sex: raptor.sex, color: raptor.color}
  console.log("*************")
  console.log(raptor.name)
  console.log(raptor._id)
  console.log("*************")
  this.editTog = true;
}

toEdit(_id) {
  let observable = this._httpService.editRaptor(this.editRaptor,_id);
  observable.subscribe((data) => {
    this.editTog = false;
    this.getRaptorsFromService();
  console.log("Submitted edit");
});

}

}
