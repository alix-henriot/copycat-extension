import type { PlasmoCSConfig } from "plasmo"
import { StyleProvider } from "@ant-design/cssinjs"
import { Button, Tag, Tour } from "antd"
import type { TourProps } from 'antd';
import { useState } from "react";


export const getShadowHostId = () => 'Onboarding'
export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
    run_at: "document_start"
}

const Onboarding = () => {
    const [open, setOpen] = useState<boolean>(false);

    const steps: TourProps['steps'] = [
        {
          title: 'Welcome to Copycat',
          description: 'A multi-clipboard tool designed for fast paced workflow',
          cover: (
            <iframe style={{border: 'none', borderRadius: 8}} width="480" height="320" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"/>
          ),
          target: null,
          mask : {
            style : {
                zIndex: 1000
            }
          }
        },
      ];

    return (
        <StyleProvider container={document.getElementById('Onboarding')?.shadowRoot}>
            <Tour open={open} onClose={() => setOpen(false)} steps={steps}

            getPopupContainer={() => document.getElementById('Onboarding')?.shadowRoot as unknown as HTMLElement}
            />
            <Button type="primary" onClick={() => setOpen(!open)}>
                Begin Tour
            </Button>


        </StyleProvider>
    )
}

export default Onboarding;