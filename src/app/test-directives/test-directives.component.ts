import { Component } from '@angular/core';

@Component({
  selector: 'app-test-directives',
  templateUrl: './test-directives.component.html',
  styleUrls: ['./test-directives.component.css']
})
export class TestDirectivesComponent {
  numbers = [1,2,3,4,5]
  onlyOdd: boolean = true;
  display = true
    constructor() {

    }


}
