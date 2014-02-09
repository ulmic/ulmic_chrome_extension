var link = document.getElementById("link");
link.addEventListener("click", function(){
    chrome.tabs.getSelected({}, function(tab) {
          chrome.tabs.update(tab.id, {url: 'http://ulmic.ru'});
            });
}, false);

    })

}
