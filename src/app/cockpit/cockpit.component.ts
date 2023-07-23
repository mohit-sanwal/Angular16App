import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css', '../app.component.css']
})
export class CockpitComponent implements OnInit{
  // bprintCreated is an alias for emit event
  @Output() serverCreated = new EventEmitter<{name: string, content: string, type: string}>();
  @Output('bprintCreated') bluePrintCreated = new EventEmitter<{name: string, content: string, type: string}>();
  newServerName = ''
  newServerContent =''
  serverElements = [];
  onAddServer(nameInput: HTMLInputElement , contentInput: HTMLInputElement) {
    this.newServerName = nameInput.value;
    this.newServerContent = contentInput.value;
    if(this.newServerName && this.newServerContent) {
    this.serverCreated.emit({name: this.newServerName, content: this.newServerContent, type: 'server'});
    this.newServerName = ''
    this.newServerContent =''
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    } else {
      alert('please enter all the field before submit')
    }
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.newServerName = nameInput.value;
    this.newServerContent = contentInput.value;
    if(this.newServerName && this.newServerContent) {
      this.bluePrintCreated.emit({name: this.newServerName, content: this.newServerContent, type: 'blueprint'})
      // this.serverElements.push({
      //   type: 'blueprint',
      //   name: this.newServerName,
      //   content: this.newServerContent
      // });
      this.newServerName = ''
      this.newServerContent =''
    } else {
      alert('please enter all the field before submit')
    }
   
  }

  ngOnInit(): void {
    
  }
}
