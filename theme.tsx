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

        components: {
          Tag: {
            lineWidth: 1,
          },

        },
      }}
    >
      {props.children}
    </ConfigProvider>
  )
}