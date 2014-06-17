var i;
console.log("start searching");
for (i = 0; i < document.links.length; i++) {
  if (document.links[i].innerHTML.toLowerCase().indexOf("#миц") >= 0) {
    var style = window.getComputedStyle(document.links[i], null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    document.links[i].innerHTML += " <img src=\"" + chrome.extension.getURL('images/mini_logo_mic.png') + "\" width=\"auto\" height=\"" + (fontSize + 3) + "px" + "\" />"
  }
}
