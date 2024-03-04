import { Button, message } from "antd"
import { SelectionFilledIcon, SelectionOutlinedIcon } from "./CustomIcons";
import { useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";


type MagnetProps = {
    IsWordSelectorActive: boolean,
    setIsWordSelectorActive: (active: boolean) => void,
    notifications?: boolean,
}

export const Magnet = ({IsWordSelectorActive, setIsWordSelectorActive, notifications}: MagnetProps) => {

    useHotkeys('alt+4', () => {
        setIsWordSelectorActive(!IsWordSelectorActive);
        notifications && message.info(`Word selector ${IsWordSelectorActive ? "disabled" : "enabled"}`);
    }, {preventDefault: true, enableOnFormTags: ["INPUT", "TEXTAREA"]})

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
          if (!IsWordSelectorActive) {
            return;
          }
    
          const range = document.caretRangeFromPoint(e.clientX, e.clientY);
          if (range) {
            const textNode = range.startContainer;
            const offset = range.startOffset;
            const text = textNode.textContent;
            if (text) {
              const words = text.split(' ');
              const wordIndex = text.slice(0, offset).split(' ').length - 1;
              const wordStart = text.indexOf(words[wordIndex]);
              const wordEnd = wordStart + words[wordIndex].length;
    
              const selection = window.getSelection();
              const wordRange = document.createRange();
              wordRange.setStart(textNode, wordStart);
              wordRange.setEnd(textNode, wordEnd);
    
              selection?.removeAllRanges();
              selection?.addRange(wordRange);
            }
          }
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, [IsWordSelectorActive]);

    return (
        <Button icon={<SelectionFilledIcon />} type={IsWordSelectorActive ? "primary" : "text"} />
    )
}