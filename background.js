chrome.browserAction.onClicked.addListener(function(tab) {

    // Salva a URL da guia atual
    chrome.storage.local.set({
        'savedTab': tab.url
    });

});

chrome.tabs.onCreated.addListener(function(tab) {

    let url = tab.url || tab.pendingUrl;

    console.log(url);

    if(url === 'chrome://newtab/'){

        chrome.storage.local.get('savedTab', function(data){

            if(data.savedTab){

                chrome.tabs.update(tab.id, {
                    url: data.savedTab
                });

            }

        });

    }

});
