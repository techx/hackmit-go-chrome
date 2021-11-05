(function () {
  "use strict";

  var BASE_URL = "https://go.hackmit.org/";

  function navigate(url) {
    browser.tabs.update({ url });
  }

  function golink(suffix) {
    return BASE_URL + suffix;
  }

  browser.omnibox.onInputChanged.addListener(function (text, suggest) {
    // do nothing for now
    // we'd need a special API for getting suggestions
  });

  browser.omnibox.onInputEntered.addListener(function (text) {
    var url = golink(text);
    navigate(url);
  });

  browser.omnibox.setDefaultSuggestion({
    description: "Open " + golink("%s"),
  });
})();
