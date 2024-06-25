import React, { useEffect, useRef, useState } from "react"
import type { PlasmoCSConfig } from "plasmo";
import { useStorage } from "@plasmohq/storage/hook";
import { StyleProvider } from "@ant-design/cssinjs"
import { getStyle } from "~src/components/getStyle"; // Check if necessary
import { Container } from "~src/components/Container";
import { ClipboardViewer } from "~src/components/Clipboard";
import { CopycatIcon } from "~src/components/CustomIcons";
import { Magnet } from "~src/components/WordSelector";
import { ThemeProvider } from "~src/theme";
import { Content } from "~src/components/Content";
import { Button, Divider, Popover, Tooltip, theme } from 'antd';
import ClipboardHotkeys from "~src/components/ClipboardHotkeys";
import { sendToBackground } from "@plasmohq/messaging";

export const getShadowHostId = () => 'CSUI'
export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
    run_at: "document_start",
}

const CSUI = () => {
    const [clipboard, setClipboard] = useStorage("clipboard");
    const [isDockVisible, setIsDockVisible] = useStorage("isDockVisible");
    const [isDarkMode, setIsDarkMode] = useStorage("isDarkMode");
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useStorage("isNotificationsEnabled");
    const [isHoverable, setIsHoverable] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [IsWordSelectorActive, setIsWordSelectorActive] = useState(false);
    

    return (
    <ThemeProvider isDarkMode={isDarkMode}>
        <StyleProvider container={document.getElementById('CSUI')?.shadowRoot}>
            <ClipboardHotkeys notifications={isNotificationsEnabled} clipboard={clipboard} setClipboard={setClipboard} />
            <Container isVisible={isDockVisible} isHoverable={isHoverable} setIsHoverable={setIsHoverable} isHover={isHover} setIsHover={setIsHover}>
                <Button type="text" icon={<CopycatIcon style={{ fontSize: 20}}/>}/>
                <Content>
                    <ClipboardViewer values={clipboard} />
                    <Divider type="vertical" />
                    <Magnet notifications={isNotificationsEnabled} setIsWordSelectorActive={setIsWordSelectorActive} IsWordSelectorActive={IsWordSelectorActive}/>
                </Content>
            </Container>
        </StyleProvider>
    </ThemeProvider>
    )
}

export default CSUI;

