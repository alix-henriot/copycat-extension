import { useCallback, useEffect, useState } from "react";
import debounce from 'lodash.debounce';
import { useStorage } from "@plasmohq/storage/hook";

export const useTextMagnet = () => {
  const [isActive, setIsActive] = useStorage("TextMagnetActive");

  const handleMouseMove = useCallback(debounce((event: MouseEvent) => {
    if (!isActive) return;

    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const elementUnderCursor = document.elementFromPoint(mouseX, mouseY);

    if (!elementUnderCursor) return;

    const range = document.createRange();
    const walker = document.createTreeWalker(elementUnderCursor, NodeFilter.SHOW_TEXT);

    let closestWord = null;
    let minimumDistance = Number.POSITIVE_INFINITY;

    while (walker.nextNode()) {
      const node = walker.currentNode;
      const textContent = node.textContent;
      const textLength = textContent.length;

      let startIndex = -1;
      for (let i = 0; i < textLength; i++) {
        const char = textContent[i];
        if (/\S/.test(char)) {
          if (startIndex === -1) {
            startIndex = i;
          }
          if (i === textLength - 1 || /\s/.test(textContent[i + 1])) {
            range.setStart(node, startIndex);
            range.setEnd(node, i + 1);
            const rect = range.getBoundingClientRect();

            // Only calculate distance for words within a certain bounding box
            if (Math.abs(mouseX - rect.left) > 100 || Math.abs(mouseY - rect.top) > 100) {
              continue;
            }

            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

            if (distance < minimumDistance) {
              minimumDistance = distance;
              closestWord = range.cloneRange();
            }
            startIndex = -1;
          }
        }
      }
    }

    if (closestWord) {
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(closestWord);
    }
  }, 100), [isActive]); // Debounce the event handler

  useEffect(() => {
    if (isActive) {
      document.body.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isActive, handleMouseMove]);

  return { setIsActive };
};