import { Button, Divider, Tag } from "antd"
import React from "react";
import { ClipboardFilledIcon } from "./CustomIcons";

const styleButton = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const styleSpan = {
    maxWidth: "10ch",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
}

export const ClipboardViewer = ({values}) => {
    return (
        <React.Fragment>
            {values.map((clipboard) => (
                <Button key={clipboard.id} type="text" icon={<Tag bordered={false} style={{borderRadius:6, fontSize:14}} icon={<ClipboardFilledIcon />}>{clipboard.id}</Tag>} style={styleButton}>
                    <span style={styleSpan}>
                        {clipboard.value}
                    </span>
                </Button>
            ))}
        </React.Fragment>
    )
}