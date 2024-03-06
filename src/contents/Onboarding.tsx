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
            <img
            alt="example"
                src="https://i.ibb.co/HqzwHtQ/copy-illustration.jpg"/>
            
          ),
          target: null,
          mask : {
            style : {
                zIndex: 1000
            }
          }
        },
        {
          title: 'Multi-clipboard concept',
          description: <span>You now have three clipboards identified by their number <Tag color="blue">1</Tag>, <Tag color="blue">2</Tag> or <Tag color="blue">3</Tag>. Enter <Tag  color="blue">Alt</Tag>+ the clipboard number (<Tag color="blue">1</Tag>, <Tag color="blue">2</Tag> or<Tag color="blue">3</Tag>) to copy and paste from it.</span>,
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
          title: 'Copy text',
          description: <span> First <Tag color="green">select</Tag> the text you want to copy and enter shortcut <Tag color="blue">Alt</Tag>+<Tag color="blue">1</Tag>,<Tag color="blue">2</Tag>or<Tag color="blue">3</Tag>.</span>,
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
          title: 'Copycat dock',
          description: <span>You can easily see the text copied in your clipboards on the dock</span>,
          cover: (
            <img
            alt="example"
                src="https://workoholics.es/static/cb19c9aa3a826615d1696a4a15465bd0/c6523/post-figma-y-workoholics-featured-mobile.jpg"/>
          ),
          //target: () => document.getElementById('CSUI')?.shadowRoot.getElementById('copycat-container') as unknown as HTMLElement,
          mask : {
            style : {
                zIndex: 1000
            }
          }
        },
        {
          title: 'Paste text',
          description: <span><Tag color="green">Click</Tag> inside of a text field and enter <Tag color="blue">Alt</Tag>+<Tag color="blue">1</Tag>,<Tag color="blue">2</Tag>or<Tag color="blue">3</Tag> to paste from clipboard.</span>,
          //placement: 'left',
          cover: (
            <img
            alt="example"
                src="https://workoholics.es/static/cb19c9aa3a826615d1696a4a15465bd0/c6523/post-figma-y-workoholics-featured-mobile.jpg"/>
          ),
          //target: () => document.querySelector('.RNNXgb'),
          mask : {
            style : {
                zIndex: 1000
            }
          }
        },
        {
          title: 'Use Word Selector',
          description: <span>Enter <Tag color="blue">Alt</Tag>+<Tag color="blue">4</Tag> to select the closest word to the cursor. Press it once more to disable it.</span>,
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
          title: 'All set!',
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