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
  clicked = false;
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
  this.clicked = true;
}

// createRaptor(){
//   let observable = this._httpService.newRaptor(this.newRaptor);
//   observable.subscribe((data)=> {
//     this.newRaptor = {name:"", age:0,sex:"", color:""};
//     this.getRaptorsFromService();
//   });
// }
// onDelete(raptor) {
//   let observable = this._httpService.deleteRaptor(raptor);
//   observable.subscribe((data)=> {
//     this.getRaptorsFromService();
//   });
// }
// toEdit(raptor) {
//   let observable = this._httpService.editRaptor(raptor);
//   observable.subscribe((data)=> {
//     this.getRaptorsFromService();
//   });
// }

}
