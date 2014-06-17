var i;
console.log("start searching");
for (i = 0; i < document.links.length; i++) {
  if (document.links[i].innerHTML.toLowerCase().indexOf("#миц") >= 0) {
    document.links[i].innerHTML += "<img src=\"" + chrome.extension.getURL('images/mini_logo_mic.png') + "\" width=\"15px\" height=\"10px\" />"
  }
}
