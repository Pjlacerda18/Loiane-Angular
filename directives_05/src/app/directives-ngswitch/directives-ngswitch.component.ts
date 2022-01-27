import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngswitch',
  templateUrl: './directives-ngswitch.component.html',
  styleUrls: ['./directives-ngswitch.component.css']
})
export class DirectivesNgswitchComponent implements OnInit {

  aba: string = "home";

  constructor() { }

  ngOnInit(): void {
  }

}
