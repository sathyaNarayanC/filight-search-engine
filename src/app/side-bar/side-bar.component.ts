import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public originCity;
  public destinationCity;
  public departureDate;
  public returnDate;
  public noOfPass;
  public formData;
  public formDatas;

  @Output() public childEvent = new EventEmitter;

  openTrip(evt, tripType) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    document.getElementById("display-area-div").style.visibility = "hidden";
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tripType).style.display = "block";
    evt.currentTarget.className += " active";
  }

  onClick(formData){
    this.childEvent.emit(formData);
  }


}
