import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // srvElement added alias to element now instead of element we can use srvElement while passing props
  @Input('srvElement') element: {name: string, content: string, type: string};


   constructor() {
    this.element = {name:'', content: '', type: ''}
   }

   ngOnInit(): void {
     
   }
}
