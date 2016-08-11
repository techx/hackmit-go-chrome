(function() {
  'use strict';

  var BASE_URL = 'https://go.hackmit.org/';

  function navigate(url) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.update(tabs[0].id, {url: url});
    });
  }

  function golink(suffix) {
    return BASE_URL + suffix;
  }

  chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
    // do nothing for now
    // we'd need a special API for getting suggestions
  });

  chrome.omnibox.onInputEntered.addListener(function(text) {
    var url = golink(text);
    navigate(url);
  });

  chrome.omnibox.setDefaultSuggestion({
    'description': 'Open ' + golink('%s')
  });

}());
