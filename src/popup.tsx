import React from 'react';
import { useStorage } from "@plasmohq/storage/hook"
import { Avatar, Button, Card, Col, Divider, Dropdown, Flex, Row, Slider, Space, Switch, Typography, type MenuProps, Select, Collapse, type CollapseProps, ConfigProvider, Layout, List, Input, Tag, Alert } from 'antd';
import { BulbFilled, DownOutlined, EditOutlined, EllipsisOutlined, GoogleOutlined, LogoutOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { ThemeProvider } from '~src/theme';
import './popup.css';
const { Header, Footer, Sider, Content } = Layout;

function IndexPopup() {
  const [isDockVisible, setIsDockVisible] = useStorage("isDockVisible", true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useStorage("isNotificationsEnabled", true);
  const [isDarkMode, setIsDarkMode] = useStorage("isDarkMode", true);
  const { Meta } = Card;

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <Card
      title="Preferences"
      extra={<Avatar icon={<UserOutlined />}/>}
      bordered={false}
      style={{ width: 320, borderRadius: 0}}
      >
        <Alert
        message="Connect you Google account to remove copy limits"
        type="warning"
        showIcon
        closable
        action={
          <Button size="small" type='text'>Connect</Button>
        }
        />

        <List>
          <List.Item>
            <List.Item.Meta
            title="Dock"
            description="Enable dock on page"
            />
            <Switch size='small' checked={isDockVisible} onChange={setIsDockVisible}/>
          </List.Item>

          
          <List.Item>
            <List.Item.Meta
            title="Notifications"
            description="Enable notifications"
            />
            <Switch size='small' checked={isNotificationsEnabled} onChange={setIsNotificationsEnabled} />
          </List.Item>

          <List.Item>
            <List.Item.Meta
            title="Dark Mode"
            description="Enable dark mode"
            />
            <Switch size='small' checked={isDarkMode} onChange={setIsDarkMode}/>
          </List.Item>

          <List.Item>
            <Button type="primary" icon={<BulbFilled />} block>Request new feature</Button>
          </List.Item>
        </List>
          
      </Card>

    </ThemeProvider>
  )
}

export default IndexPopup
