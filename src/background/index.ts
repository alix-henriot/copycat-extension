import { Storage } from "@plasmohq/storage"
 
const storage = new Storage()

chrome.runtime.onInstalled.addListener(async () => {
  await storage.set("clipboard", [
    {id: 1,
    value: "Press Alt+1"
    },
    {id: 2,
    value: "Press Alt+2"
    },
    {id: 3,
    value: "Press Alt+3"
    },
  ]);
  await storage.set("isDockVisible", true);
  await storage.set("isDarkMode", false);
  await storage.set("isNotificationsEnabled", true);

  console.log('Default storage values set!');
});