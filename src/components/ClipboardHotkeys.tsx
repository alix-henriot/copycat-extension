import { message } from 'antd';
import { useHotkeys } from 'react-hotkeys-hook';

const ClipboardHotkeys = ({ clipboard, setClipboard, notifications }) => {
    for (let i = 1; i <= 3; i++) {
        useHotkeys(`alt+${i}`, async () => {
            const selection = window.getSelection()?.toString();
            // Find the clipboard item with id: i
            const clipboardItem = clipboard.find(item => item.id === i);
            if (clipboardItem) {
                if (selection) {
                    // Set the clipboard to the value of the clipboard item
                    setClipboard(prevClipboard => prevClipboard.map(item => item.id === i ? {...item, value: selection} : item));
                    notifications && message.success(`Copied to clipboard ${i}`);
                } else {
                    // Insert the value of the clipboard item at the current cursor position
                    document.execCommand('insertText', false, clipboardItem.value);
                    const domEditableElement = document.querySelector('.ck-editor__editable') as HTMLElement;

                    // Get the editor instance from the editable element.
                    const editorInstance = (domEditableElement as any).ckeditorInstance;

                    // Use the editor instance API.
                    editorInstance.setData('<p>Hello world!<p>');
                }
            }
        }, {preventDefault: true, enableOnFormTags: ["INPUT", "TEXTAREA"]})
    }

    return null;
};

export default ClipboardHotkeys;