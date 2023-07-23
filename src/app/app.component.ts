import { Component } from '@angular/core';
import {ServerElements} from './app.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElements[] = [new ServerElements('test server', 'just a test', 'server')];

  constructor() {
  }

  onServerCreated(serverData: {name: string, content: string, type: string}) {
    this.serverElements.push(serverData);
  }

  onBluePrintCreated(bluePrintData: {name: string, content: string, type: string}) {
    this.serverElements.push(bluePrintData);
  }
}
