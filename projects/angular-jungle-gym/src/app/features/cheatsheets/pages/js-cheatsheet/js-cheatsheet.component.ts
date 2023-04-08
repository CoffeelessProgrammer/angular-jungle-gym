import { Component, OnInit } from '@angular/core';

import * as data from '../../assets/js-cheatsheet.json';

@Component({
  selector: 'app-js-cheatsheet',
  templateUrl: './js-cheatsheet.component.html',
  styleUrls: ['./js-cheatsheet.component.scss']
})
export class JsCheatsheetComponent implements OnInit {

  cheatsheet = data;

  
  ngOnInit() {
  }

}
