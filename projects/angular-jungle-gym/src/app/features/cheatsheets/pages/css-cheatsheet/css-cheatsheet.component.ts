import { Component, OnInit } from '@angular/core';
import { initExternalLinks } from 'projects/angular-jungle-gym/src/app/shared/utilities/util';

@Component({
  selector: 'app-css-cheatsheet',
  templateUrl: './css-cheatsheet.component.html',
  styleUrls: ['./css-cheatsheet.component.scss']
})
export class CssCheatsheetComponent implements OnInit {

  mdnCssPropertyUrlPrefix = "https://developer.mozilla.org/en-US/docs/Web/CSS/";

  ngOnInit() {
    initExternalLinks("cheatsheet__anchor--mdn-css-property", this.mdnCssPropertyUrlPrefix);
  }

  externalLinks() {
    /* https://html.com/attributes/a-target/ */
    for (let anchors = document.getElementsByTagName("a"), i = 0; i < anchors.length; ++i) {
      const a = anchors[i];
      a.getAttribute("href") && a.hostname !== location.hostname && (a.target = "_blank");
    }
  };

}
