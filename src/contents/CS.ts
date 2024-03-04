import { useStorage } from '@plasmohq/storage/hook';
import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { copySelection, pasteSelection } from '~src/components/Storage';
import { useTextMagnet } from '~src/components/TextMagnet';

const Hotkey = () => {
    const [count, setCount] = useStorage("count", 0);

    for (let i = 1; i <= 3; i++) {
        useHotkeys(`alt+${i}`, async () => {
            setCount(count + 1);
            console.log(count)
            const selection = window.getSelection()?.toString();

            if (selection) {
                
                await copySelection({i});

            } else {
                
                await pasteSelection({i});
            
            }
        
        }, {preventDefault: true, enableOnFormTags: ["INPUT", "TEXTAREA"]} );
    }

    useHotkeys('alt+4', () => {
        console.log('alt+4');
    }, {preventDefault: true, enableOnFormTags: ["INPUT", "TEXTAREA"]} );
}

export default Hotkey;