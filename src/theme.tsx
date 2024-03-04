import { ConfigProvider, theme } from 'antd';

type ThemeProviderProps = {
  isDarkMode?: boolean,
  children: React.ReactNode,
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const themeAlgorithm = props.isDarkMode === true ? theme.darkAlgorithm : theme.defaultAlgorithm;

  return (
    <ConfigProvider
      theme={{
        algorithm: [themeAlgorithm],

        token: {
          colorPrimaryBg: props.isDarkMode ? "rgba(0, 0, 0, 0.6" : "rgba(255, 255, 255, 0.6",
        }
      }}
    >
      {props.children}
    </ConfigProvider>
  )
}