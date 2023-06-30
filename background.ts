// background.ts

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({ url: "https://www.example.com" });
});
