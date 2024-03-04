import { Button, Divider, Flex, Tag } from "antd"
import React from "react";
import Texty from "rc-texty";
import { useStorage } from "@plasmohq/storage/hook";

const styleSpan = {
    maxWidth: "12ch",
    wrap: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
}

const styleButton = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

export const Clipboard = () => {
    const [values, setValues] = useStorage("clipboard", {} as Record<number, string>);

    if (!values) {
        return null;
    }

    return (
        <>
            {Object.entries(values).map(([key, value]) => {
                return (
                    <Flex key={key} align="center" justify="center">
                            <Button type="text" icon={<Tag color="blue" bordered={true} style={{ fontWeight: 500}}>⌥ {key}</Tag>} style={styleButton} key={value}>
                                <span style={styleSpan}>
                                    <Texty type="left" mode="smooth" duration={1} key={value}>{value}</Texty>
                                </span>
                            </Button>
                        <Divider type="vertical" />
                    </Flex>
                )
            })}
        </>
    )
}