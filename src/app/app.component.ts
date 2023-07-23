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
}
