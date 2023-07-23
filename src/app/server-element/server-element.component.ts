import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
  AfterViewChecked, OnDestroy, SimpleChanges, Input, ViewEncapsulation, ViewChild, ElementRef, ContentChild, } from '@angular/core';

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

  @ViewChild('heading', {static: true}) heading: ElementRef;
  @ContentChild('contentParagraph') contentPara: ElementRef;

   constructor() {
    this.element = {name:'', content: '', type: ''}
    console.log('constructor called..')
   }

 // contentChild will accessible after ngAfterContentInit, ViewChild Ref will be accessed after ngAfterViewInit

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called', changes, this.heading.nativeElement.textContent)
  }
  
  ngOnInit(){
    console.log('ngOnInit called', this.heading?.nativeElement?.value)
  }

  ngDoCheck() {
    console.log('ngDoCheck called', this.heading.nativeElement.textContent)
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called',   this.heading.nativeElement.textContent, this.contentPara.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called',  this.heading.nativeElement.textContent, this.contentPara.nativeElement.textContent)
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called',   this.heading.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called', this.heading.nativeElement.textContent, this.contentPara.nativeElement.textContent)
  }

  ngOnDestroy() {
    console.log('ngOnDistroy called', this.heading.nativeElement.textContent)
  }

}
