import { Flex } from "antd"
import { theme } from 'antd';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import { useEffect, useState } from "react";

type ContainerProps = {
    isVisible?: boolean,
    isHoverable: boolean,
    children: React.ReactNode,
    styles?: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
    const [bottom, setBottom] = useState(12); // initial bottom value


    const { useToken } = theme;
    const { token } = useToken();

    const style = {
        position: "fixed" as "fixed",
        bottom: bottom, 
        left: "50%",
        height: 32,
        transition: 'bottom 0.25s ease-in-out',
        zIndex: 999999,
        transform: "translateX(-50%)",
        borderRadius: 8,
        padding: "4px 12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        backgroundColor: token.colorPrimaryBg,
        //backgroundColor: theme.defaultAlgorithm(token).colorPrimaryBg,


        //backdropFilter: "blur(10px)",
        //WebkitBackdropFilter: "blur(10px)",
        //backgroundColor: "rgba(255, 255, 255, 0.44)",
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY > window.innerHeight * 0.9) {
                setBottom(-52);
            } else {
                setBottom(12);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
        {
            props.isVisible ?
                <Flex gap="middle" align="center" style={style}>
                    {props.children}
                </Flex>
            : null
        }
        </>
    )
}