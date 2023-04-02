import { Component, OnInit } from '@angular/core';
import { setExternalLinksTargetBlank } from 'projects/angular-jungle-gym/src/app/shared/utilities/util';

@Component({
  selector: 'app-html-cheatsheet',
  templateUrl: './html-cheatsheet.component.html',
  styleUrls: ['./html-cheatsheet.component.scss']
})
export class HtmlCheatsheetComponent implements OnInit {

  ngOnInit() {
    setExternalLinksTargetBlank();
  }

}
