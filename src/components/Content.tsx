import { Divider, Flex } from "antd"

type ContentProps = {
    children: React.ReactNode,
}


export const Content = ({children}: ContentProps) => {

    return (
            <Flex align="center">
                {children}
            </Flex>
    )
}