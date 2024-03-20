import { Storage } from "@plasmohq/storage"
 
const storage = new Storage()

chrome.runtime.onInstalled.addListener(async () => {
  const os = navigator.platform;
  console.log(os);
  let clipboardShortcuts;
  if (os === "MacIntel" || os === "Macintosh") {
    clipboardShortcuts = [
      { id: 1, value: "Option+1" },
      { id: 2, value: "Option+2" },
      { id: 3, value: "Option+3" },
    ];
  } else {
      clipboardShortcuts = [
        { id: 1, value: "Use Alt+1" },
        { id: 2, value: "Use Alt+2" },
        { id: 3, value: "Use Alt+3" },
      ];
  }
  
  await storage.set("clipboard", clipboardShortcuts);
  await storage.set("isDockVisible", true);
  await storage.set("isDarkMode", false);
  await storage.set("isNotificationsEnabled", true);

  console.log('Default storage values set!');

  chrome.tabs.create({ url: "https://copycat-extension.com/login" });
});