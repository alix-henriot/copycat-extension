import { Flex, theme } from "antd"
import React, { useEffect } from "react";

type ContainerProps = {
    isVisible?: boolean,
    isHoverable: boolean,
    setIsHoverable: (value: boolean) => void,
    isHover: boolean,
    setIsHover: (value: boolean) => void,
    children: React.ReactNode,
    styles?: React.CSSProperties,
}


export const Container = ({isVisible, isHoverable, setIsHoverable ,isHover, setIsHover, children, styles}: ContainerProps) => {
    useEffect(() => {

        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientY > window.innerHeight * 0.9) {
                setIsHover(true);
            } else {
                setIsHover(false);
            }
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        
        return () => { document.removeEventListener('mousemove', handleMouseMove)}
    
    }, []);
  
    const { useToken } = theme;
    const { token } = useToken();
  
    const style = {
        position: "fixed" as "fixed",
        bottom: isHover ? -52 : 12, 
        left: "50%",
        height: 32,
        transition: 'bottom 0.25s ease-in-out',
        zIndex: 999999,
        transform: "translateX(-50%)",
        borderRadius: 8,
        padding: "4px 12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        backgroundColor: token.colorPrimaryBg,
        backdropFilter: "blur(10px)",
    }

    return (
        <React.Fragment>
            {isVisible && <Flex id="copycat-container" gap="middle" align="center" style={style}>
                {children}
            </Flex>}
        </React.Fragment>
    )
}

