import { Component } from '@angular/core';

@Component ({
  selector : 'app-server',
  // selector : '[app-server]',
  templateUrl: './server.component.html',
  styles : [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverid = 10;
  serverstatus = 'successful running';

  constructor() {
    this.serverstatus = Math.random() > 0.5 ? 'successful running' : 'unsuccessful running';
  }

  // routeX() {
  //   return this.serverstatus = Math.random() > 0.5 ? 'successful running' : 'unsuccessful running';
  // }

  getthestatus() {
    return this.serverstatus + ' is so fun';
  }

  getColor() {
    return this.serverstatus === 'successful running' ? 'blue' : 'yellow';
  }

}
