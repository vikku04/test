import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-serve]',
  selector: 'app-serve',
  // selector: '.app-serve',
  //
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css'],

})
export class ServeComponent implements OnInit {
  allownewserver = false;
  pbin = 'No server was created.';
  // used in property binding
  textinput = '';
  serverCreated = false;
  exec = [];

  constructor() {
    setTimeout ( () => {this.allownewserver = true; }, 5000);
  }

  ngOnInit() {
  }

  onclickdo() {
    this.serverCreated = true;
    // this.exec.push(this.textinput);
    this.exec.push(new Date());
    this.pbin = 'The server is now created !! Name of the server is ' + this.textinput;
    // used in property binding

    }

  onupdateserver(event: Event) {
    this.textinput = (event.target as HTMLInputElement).value;
  }

  activateonclick() {
    if (this.textinput === '') {
      return this.allownewserver = true;
    } else {
      return this.allownewserver = false;
    }
  }

}


