import { Button } from "antd"
import { SiZendesk } from "react-icons/si";

export const Zendesk = () => {

    const styleButton = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <Button type='text' style={styleButton} icon={<SiZendesk  />}>12846</Button>
    )
}