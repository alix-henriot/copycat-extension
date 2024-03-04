import React from 'react';
import { useStorage } from "@plasmohq/storage/hook"
import { Avatar, Button, Card, Col, Divider, Dropdown, Flex, Row, Slider, Space, Switch, Typography, type MenuProps, Select, Collapse, type CollapseProps, ConfigProvider, Layout, List, Input, Tag } from 'antd';
import { BulbFilled, DownOutlined, EditOutlined, EllipsisOutlined, LogoutOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { ThemeProvider } from '~theme';
const { Header, Footer, Sider, Content } = Layout;

function IndexPopup() {
  const [isDockVisible, setIsDockVisible] = useStorage("isDockVisible", true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useStorage("isNotificationsEnabled", true);
  const [isDarkMode, setIsDarkMode] = useStorage("isDarkMode", true);
  const [isZendeskTicketTrackingEnabled, setIsZendeskTicketTrackingEnabled] = useStorage("isZendeskTicketTrackingEnabled", true);

  const { Meta } = Card;

  return (
    <ThemeProvider isDarkMode={isDarkMode}>

    <Flex vertical
    style={{
      width: 300,
      overflow: 'scroll',
    }}
    gap={'large'}
    >

      <Card
      title="Preferences"
      extra={<Avatar icon={<UserOutlined />}/>}
      bordered={false}
      style={{ width: 300, boxShadow: 'none' }}
      >
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
            <List.Item.Meta
            title="Zendesk ticket tracking"
            description="Enable Zendesk ticket tracking"
            />
            <>
            <Tag color="gold">PRO</Tag>
            <Switch size='small' checked={isZendeskTicketTrackingEnabled} onChange={setIsZendeskTicketTrackingEnabled} />
            </>
          </List.Item>
          <List.Item>
            <Button type="primary" icon={<BulbFilled />} block>Request new feature</Button>
          </List.Item>
        </List>
          
      </Card>

    
    </Flex>
    </ThemeProvider>
  )
}

export default IndexPopup
