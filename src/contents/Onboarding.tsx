import type { PlasmoCSConfig } from "plasmo"
import { StyleProvider } from "@ant-design/cssinjs"
import { Button, Tour } from "antd"
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
          title: 'Welcome to a Smoother Copy-Paste Experience',
          description: 'With Copycat, you can easily juggle multiple snippets of text, swiftly moving between tasks without losing track. Let\'s get started!',
          cover: (
            <img
            alt="example"
                src="https://workoholics.es/static/cb19c9aa3a826615d1696a4a15465bd0/c6523/post-figma-y-workoholics-featured-mobile.jpg"/>
            
          ),
          target: null,
          mask : {
            style : {
                zIndex: 1000
            }
          }
        },
        {
          title: 'Mastering Your New Tool',
          description: 'Copycat\'s shortcuts are designed to be remembered and accessed easily, so you can stay focused on what\'s important. Let\'s get your fingers familiar with these time-saving keystrokes.',
          cover: (
            <img
            alt="example"
                src="https://workoholics.es/static/cb19c9aa3a826615d1696a4a15465bd0/c6523/post-figma-y-workoholics-featured-mobile.jpg"/>
          ),
          target: null,
          mask : {
            style : {
                zIndex: 1000
            }
          }
        },
        {
          title: 'Other Actions',
          description: 'Click to see other actions.',
          cover: (
            <img
            alt="example"
                src="https://workoholics.es/static/cb19c9aa3a826615d1696a4a15465bd0/c6523/post-figma-y-workoholics-featured-mobile.jpg"/>
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