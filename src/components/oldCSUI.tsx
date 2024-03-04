import React, { useEffect, useState } from "react"
import { StyleProvider } from "@ant-design/cssinjs"
import { Avatar, Button, ConfigProvider, Divider, Flex, Layout, Rate, Tag, Typography, message, notification } from "antd";
import antdResetCssText from "data-text:antd/dist/reset.css"
import type { PlasmoCSConfig, PlasmoCSUIProps, PlasmoGetInlineAnchor, PlasmoGetOverlayAnchor, PlasmoGetOverlayAnchorList, PlasmoGetShadowHostId } from "plasmo"
import { sendToBackground } from "@plasmohq/messaging"
import { useHotkeys } from "react-hotkeys-hook";
import { useTextMagnet } from "~src/components/TextMagnet";

import { TbMagnet, TbMagnetOff, TbSquareRoundedNumber1 } from "react-icons/tb";

export const config: PlasmoCSConfig = {
 matches: ["<all_urls>"],
 run_at: "document_start"
}

const HOST_CLIPBOARD = "Clipboard"
export const getShadowHostId = () => HOST_CLIPBOARD


export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = antdResetCssText
  return style
}


const ClipboardViewer = () => {
  const [clipboards, setClipboards] = useState([]);
  const [isTabVisible, setIsTabVisible] = useState(document.visibilityState === "visible");
  const [isTextMagnetActive, setIsTextMagnetActive] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  let hoverTimeout: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout); // Annule le timeout précédent si la souris entre à nouveau
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Définit un timeout pour retarder le setIsHovered(false) de 3 secondes
    hoverTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 3000);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(hoverTimeout);
    };
  }, []);

  for (let i = 1; i <= 3; i++) {
  useHotkeys(`alt+${i}`, () => {
    const selection = window.getSelection().toString();
    
    if (selection) {
      sendToBackground({
        name: 'update',
        body: {
          clipboardId: `clipboard-${i}`,
          newValue: selection
        }
      })
      
      .then(response => {
        if (response && response.updatedClipboard) {
          const updatedClipboards = clipboards.map(clipboard =>
            clipboard.key === `clipboard-${i}` ? { ...clipboard, value: response.updatedClipboard[`clipboard-${i}`] } : clipboard
          );
          setClipboards(updatedClipboards);
          message.success(`Clipboard ${i} updated successfully!`);
        } else {
          throw new Error('Failed to update clipboard');
        }
      }).catch(error => {
        console.error("Update clipboard error:", error);
        message.error(`Failed to update clipboard ${i}. Please try again later.`);
      });
    }

    else {
      const activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        console.log('activeElement:', activeElement);
        const clipboardValue = clipboards.find(clipboard => clipboard.key === `clipboard-${i}`)?.value;

        if (clipboardValue) {
          document.execCommand('insertText', false, clipboardValue);
        }
      }
    }

    }, {preventDefault: true, enableOnFormTags: ["INPUT", "TEXTAREA"]} );
  }
  

  useHotkeys('alt+4', () => {
    if (isTextMagnetActive) {
      // Assuming TextMagnet has a method to deactivate it
      setIsTextMagnetActive(false);
      window.getSelection().removeAllRanges();
      message.info({content: "TextMagnet disabled", duration: 2});
    } else {
      setIsTextMagnetActive(true);
      message.info({content: "TextMagnet enabled", duration: 2});
    }
  }, {preventDefault: true, enableOnFormTags: ["INPUT", "TEXTAREA"]});
  
  

  useEffect(() => {
    sendToBackground({ name: "get-all" }).then((response) => {
      if (response && !response.error) {
        const clipboardsArray = Object.entries(response).map(([key, value]) => ({ key, value }));
        setClipboards(clipboardsArray);
      } else {
        console.error("Error from server:", response.error);
        // Use notification.error instead of message.error
        notification.warning({
          message: 'Copycat',
          description: response.error || "An unexpected error occurred. Please try again later.",
          duration: 4.5,
          onClick: () => {window.open('http://localhost:3000/login', '_blank');}
        });
      }
    }).catch((error) => {
      console.error("Communication error:", error);
      notification.error({
        message: 'Communication Error',
        description: "Communication error with the background service. Please check your connection and try again.",
        duration: 4.5,
      });
    });

  }, [isTabVisible]);

  return (

    <StyleProvider container={document.getElementById(HOST_CLIPBOARD)?.shadowRoot}>    
    <div style={{ position: "fixed", bottom: isHovered ? -40 : 12, transition: 'bottom 0.25s ease-in-out',
    zIndex: 99999, left: "50%", transform: "translateX(-50%)",
    borderRadius: "8px", padding: "4px 8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)", gap: 8, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
    backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.44)",
    }}
    //onMouseEnter={handleMouseEnter}
    //onMouseLeave={handleMouseLeave}
  >
          <Button type="text" style={{color:'white'}}></Button>
      {clipboards.map((clipboard, index) => (
        /*<Tag style={{marginRight:0}} icon={<PushpinTwoTone />}color='processing' bordered={false} >{clipboard.value}</Tag>*/
        <>
          <Divider type="vertical" />
          <Button key={index} icon={<TbSquareRoundedNumber1/>} type="text">
            {clipboard.value}
          </Button>

          </>
          ))}
          <Divider type="vertical" />
          <Button icon={isTextMagnetActive ? <TbMagnet size={20} color="rgba(0, 0, 0, 0.88)" /> : <TbMagnetOff size={20} color="rgba(0, 0, 0, 0.44)"/>} type="text"></Button>

    </div>
  </StyleProvider>

  );
};

export default ClipboardViewer;