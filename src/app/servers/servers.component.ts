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
   isServer: boolean = false;
   inputData: string = ''
   serverStatus: string = 'offline';
   items= ['server1', 'server2', 'server3', 'server4'];
   isDisplay = false;
   arrayOfDateTime: any = [];
   constructor() {
     setTimeout(() => {
      this.isServer = true;
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
     }, 2000)
   }

    ngInit() {

    }

    handleApply() {
      console.log('applied..', this.inputData)
    }

    handleDisplay() {
      this.isDisplay = !this.isDisplay
      const dateTime = new Date()
      this.arrayOfDateTime.push(dateTime);
    }

    // handleInputData(event: any) {
    //   console.log('event', event.target.value);
    //   this.inputData = event.target.value
    // }
}
