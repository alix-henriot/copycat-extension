import React, { useEffect, useState } from "react"
import type { PlasmoCSConfig } from "plasmo";
import { useStorage } from "@plasmohq/storage/hook";
import { StyleProvider } from "@ant-design/cssinjs"
import { getStyle } from "~src/components/getStyle"; // Check if necessary
import { Container } from "~src/components/Container";
import { Clipboard } from "~src/components/Clipboard";
import { Logo } from "~src/components/Logo";
import { Magnet } from "~src/components/Magnet";
import { ThemeProvider } from "~theme";
import { Content } from "~src/components/Content";
import { useHotkeys } from "react-hotkeys-hook";
import { Button, theme } from 'antd';
import { sendToBackground } from "@plasmohq/messaging";
import { Zendesk } from "~src/components/Zendesk";
import { Modal } from "antd";

const { useToken } = theme;


export const getShadowHostId = () => 'CSUI'
export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
    run_at: "document_start"
}

const CSUI = () => {
    const [isDockVisible, setIsDockVisible] = useStorage("isDockVisible");
    const [isHoverable, setIsHoverable] = useState(false);
    const [isDarkMode, setIsDarkMode] = useStorage("isDarkMode");
    //const [signedIn, setSignedIn] = await sendToBackground({type: "isSignedIn"});
    //const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        
    }, []); 
    
    useHotkeys('alt+5', () => {
        
        //setShowInput(!showInput)
    }, {preventDefault: true, enableOnFormTags: ["INPUT", "TEXTAREA"]} );

    return (
    <ThemeProvider isDarkMode={isDarkMode}>
    <StyleProvider container={document.getElementById('CSUI')?.shadowRoot}>
        <Container isVisible={isDockVisible} isHoverable={false}>
        <Logo color={'white'} size={20}/>
        <Content>
            {/*showInput? <Input width={600} />:<Clipboard />*/}
            <Clipboard />
            {/*<Zendesk />*/}
            <Magnet size={20} isDisabled={true}/>
        </Content>
        </Container>
    </StyleProvider>
    </ThemeProvider>
    )
}

export default CSUI;