import antdResetCssText from "data-text:antd/dist/reset.css"

export const getStyle = () => {
    const style = document.createElement("style")
    style.textContent = antdResetCssText
    return style
}