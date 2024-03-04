import { Storage } from "@plasmohq/storage";
import { message } from "antd";

const storage = new Storage();

type storageProps = {
    i: number
}

export async function copySelection (props: storageProps) {
    const selection = window.getSelection()?.toString();
    const isNotificationsEnabled = await storage.get("isNotificationsEnabled");

    const clipboard = await storage.get("clipboard") || {};
    clipboard[props.i] = selection;
    await storage.set("clipboard", clipboard);
    if (isNotificationsEnabled) {
        message.success(`Clipboard ${props.i} updated!`);
    }
}

export async function pasteSelection (props: storageProps) {
    const clipboard = await storage.get("clipboard") || {};
    const text = clipboard[props.i];

    if (text) {
        document.execCommand("insertText", false, text);
    }
}

