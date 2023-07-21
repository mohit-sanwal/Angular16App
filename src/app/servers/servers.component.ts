import { Component } from '@angular/core';

@Component({
  // selector: '['app-servers']'
  // selector: '.app-servers'
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // for writting inline templates
  // template: `<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
   isServer: boolean = true
   constructor() {
     setTimeout(() => {
      this.isServer = false;
     }, 2000)
   }
   
    ngInit() {

    }

    handleApply() {
      console.log('applied..')
    }
}
