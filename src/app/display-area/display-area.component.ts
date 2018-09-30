import { Component, OnInit, Input } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import { resolve } from 'url';
import { reject } from 'q';
@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css']
})
export class DisplayAreaComponent implements OnInit {
  public formDatas;
  public allData = [];
  public originArr = [];
  public destinationArr = [];
  public returnFlag = false;
  public noData;
  public noDataFlag = false;
  constructor(private dataService:DataServiceService) { }

  ngOnInit() {

  }

  function1(event){
    document.getElementById("display-area-div").style.visibility = "visible";
    console.log("success");
    console.log(event);
    this.formDatas = event;
    this.getData();
  }

  getData(){
   let promise = new Promise((resolve,reject) => {
    this.dataService.getData().subscribe(data => this.allData = data);
    console.log("all datassssssssssssss...."+this.allData);

    setTimeout(function() { 
    resolve('success');
  }, 2000);
   });

   promise.then((result)=>{
     console.dir(this.allData);
     console.log("fetched in then promise");
    this.originArr = [];
    let  datas = this.formDatas.value
    for(var i = 0; i < this.allData.length;i++){
        if(datas.destinationCity == this.allData[i]["destination_city"] && datas.originCity == this.allData[i]["origin_city"]){
          this.originArr.push(this.allData[i]);
        }
    }
    if(datas.returnDate != undefined && datas.returnDate != ""){
      this.returnFlag = true;
      this.destinationArr = [];
      for(var i = 0; i < this.allData.length;i++){
        if(datas.originCity == this.allData[i]["destination_city"] && datas.destinationCity == this.allData[i]["origin_city"]){
          this.destinationArr.push(this.allData[i]);
        }
      }
    }else{
      this.returnFlag = false;
    }

    if(this.originArr.length == 0 && this.destinationArr.length == 0){
      this.noDataFlag = true;
      this.noData = "No Flights Avaliable";
    }else{
      this.noDataFlag = false;
      this.noData = "";
    }
   });
  }
}
