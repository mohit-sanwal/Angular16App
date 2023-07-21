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
   isServer: boolean = true;
   inputData: string = ''
   constructor() {
     setTimeout(() => {
      this.isServer = false;
     }, 2000)
   }

    ngInit() {

    }

    handleApply() {
      console.log('applied..', this.inputData)
    }

    // handleInputData(event: any) {
    //   console.log('event', event.target.value);
    //   this.inputData = event.target.value
    // }
}
