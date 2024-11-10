
function openOverlay(){
    chrome.runtime.sendMessage({action: "openOverlay"});
}

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "openAcroX",
        title: "Search Acronym",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    // check if item clicked is our context menu and check if the selected text is not empty
    if (info.menuItemId === "openAcroX" && info.selectionText) {
        chrome.scripting.executeScript({
            // run script in the context of the current tab
            target: {tabId: tab.id},
            func: (selectedText) => {
                chrome.runtime.sendMessage({ action: "openOverlay" });
            },
            args: [info.selectionText]
        })
    }
});

