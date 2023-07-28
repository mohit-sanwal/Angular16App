import { 
  Component, OnInit} from '@angular/core';
import {ServerElements} from './app.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
 {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  
  serverElements: ServerElements[] = [new ServerElements('test server', 'this is a server', 'server')];

  // constructor() {
  //   console.log('constructor called..')
  // }

  // onChangeElement() {
  //   this.serverElements[0].name = "changed.."
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges called', changes)
  // }
  
  ngOnInit(): void {
    // console.log('ngOnInit called')
  }

  // ngDoCheck() {
  //   console.log('ngDoCheck called')
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit called')
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked called')
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit called')
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked called')
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDistroy called')
  // }


  onChangeElement() {
    this.serverElements[0].name = "changed.."
  }

  onDeleteElement() {
    this.serverElements.splice(0)
  }


  onServerCreated(serverData: {name: string, content: string, type: string}) {
    this.serverElements.push(serverData);
  }

  onBluePrintCreated(bluePrintData: {name: string, content: string, type: string}) {
    this.serverElements.push(bluePrintData);
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
