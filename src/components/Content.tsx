import { Flex } from "antd"

type ContentProps = {
    children: React.ReactNode,
}


export const Content = (props: ContentProps) => {

    return (
            <Flex>
                {props.children}
            </Flex>
    )
}