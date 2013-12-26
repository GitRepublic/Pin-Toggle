chrome.commands.onCommand.addListener(function(command) {
  if (command == "toggle-pin") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var current = tabs[0]
      chrome.tabs.update(current.id, {'pinned': !current.pinned});
    });
  }
});
