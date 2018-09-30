import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<div align="left">
            <h1>Flight Search Engine</h1>
            </div>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
