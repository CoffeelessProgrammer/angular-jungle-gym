export function initExternalLinks(anchorClassSelector: string, externalUrlPrefix: String) {
  for (let anchors = document.getElementsByClassName(anchorClassSelector), i = 0; i < anchors.length; ++i) {
    const a = <HTMLAnchorElement> anchors[i];
    // a.setAttribute("href", externalUrlPrefix + a.innerHTML);
    a.href = externalUrlPrefix + a.innerHTML;
    a.target = "_blank";
  }
}

export function setExternalLinksTargetBlank() {
  for (let anchors = document.getElementsByTagName("a"), i = 0; i < anchors.length; ++i) {
    const a = anchors[i];
    a.getAttribute("href") && (a.hostname !== location.hostname) && (a.target = "_blank");
  }
}