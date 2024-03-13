import { sendToBackground } from '@plasmohq/messaging';
import { message } from 'antd';
import hotkeys from 'hotkeys-js';
import { useEffect } from 'react';
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
                    sendToBackground({name: 'log',
                        body: {
                            activity: 'COPY',
                            url: window.location.href,
                            os: navigator.userAgent,
                        }
                    });
                } else {
                    // Insert the value of the clipboard item at the current cursor position
                    document.execCommand('insertText', false, clipboardItem.value);
                    sendToBackground({name: 'log',
                        body: {
                            activity: 'PASTE',
                            url: window.location.href,
                            os: navigator.userAgent,
                        }
                    });
                }
            }
        }, {preventDefault: true, enableOnFormTags: ["INPUT", "TEXTAREA", "SELECT", "input", "textarea", "select"]})
    }
    // SANDBOX
    //-------------------------------------------------
        // Function to execute when 'alt+5' is pressed
        useEffect(() => {
            // Configure hotkeys to work on specific elements
            hotkeys.filter = (event) => {
              const tagName = (event.target || event.srcElement)!.tagName;
              hotkeys.setScope(
                /^(INPUT|TEXTAREA|SELECT|CONTENTEDITABLE)$/.test(tagName) ? 'input' : 'other'
              );
              return true;
            };
        
            hotkeys('alt+5', (event, handler) => {
            event.preventDefault();
            document.execCommand('insertText', false, 'Hello World Document.execCommand');
            CKEDITOR.instances['editor1'].setData('<p>Hello World CKEDITOR<p>');
            })
            
            
            // Clean up
            return () => {
              hotkeys.unbind('alt+5');
            };
          }, []);


    return null;
};

export default ClipboardHotkeys;