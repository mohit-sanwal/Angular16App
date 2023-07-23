import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
  AfterViewChecked, OnDestroy, SimpleChanges, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnChanges, OnInit, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked,
OnDestroy {
  // srvElement added alias to element now instead of OnChanges, element we can use srvElement while passing props
  @Input('srvElement') element: {name: string, content: string, type: string};
  @Input() name: string;

   constructor() {
    this.element = {name:'', content: '', type: ''}
    console.log('constructor called..')
   }



  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called', changes)
  }
  
  ngOnInit(){
    console.log('ngOnInit called')
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy() {
    console.log('ngOnDistroy called')
  }

}
