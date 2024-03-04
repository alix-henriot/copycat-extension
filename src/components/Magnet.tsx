import { FormOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { IoMagnet } from "react-icons/io5";
import { TbTextRecognition } from "react-icons/tb";
import { LuTextSelect } from "react-icons/lu";


type MagnetProps = {
    isDisabled?: boolean,
    size?: number,
}

export const Magnet = (props: MagnetProps) => {
    return (
        <>
        <Button icon={<TbTextRecognition size={props.size} />} type="text" disabled={props.isDisabled}/>
        </>
    )
}