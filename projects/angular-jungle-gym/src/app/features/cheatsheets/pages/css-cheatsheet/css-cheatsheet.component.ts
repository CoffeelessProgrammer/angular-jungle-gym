import { Component, OnInit } from '@angular/core';
import { initExternalLinks } from 'projects/angular-jungle-gym/src/app/shared/utilities/util';

import * as data from '../../assets/css-cheatsheet.json';

@Component({
  selector: 'app-css-cheatsheet',
  templateUrl: './css-cheatsheet.component.html',
  styleUrls: ['./css-cheatsheet.component.scss']
})
export class CssCheatsheetComponent implements OnInit {

  cheatsheet = data;

  mdnCssPropertyUrlPrefix = "https://developer.mozilla.org/en-US/docs/Web/CSS/";

  ngOnInit() {
    initExternalLinks("cheatsheet__anchor--mdn-css-property", this.mdnCssPropertyUrlPrefix);
  }

  externalLinks() {
    /* https://html.com/attributes/a-target/ */
    let anchors = document.getElementsByTagName("a");

    for (let i=0; i < anchors.length; ++i) {
      const a = anchors[i];
      a.getAttribute("href") && a.hostname !== location.hostname && (a.target = "_blank");
    }
  };

}
