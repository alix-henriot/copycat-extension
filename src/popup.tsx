import React, { useEffect, useState } from 'react';
import { useStorage } from "@plasmohq/storage/hook"
import { Avatar, Button, Card, Col, Divider, Dropdown, Flex, Row, Slider, Space, Switch, Typography, type MenuProps, Select, Collapse, type CollapseProps, ConfigProvider, Layout, List, Input, Tag, Alert, Skeleton } from 'antd';
import { BulbFilled, DownOutlined, EditOutlined, EllipsisOutlined, GoogleOutlined, LogoutOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { ThemeProvider } from '~src/theme';
import './popup.css';
const { Header, Footer, Sider, Content } = Layout;

function IndexPopup() {
  const [isDockVisible, setIsDockVisible] = useStorage("isDockVisible", true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useStorage("isNotificationsEnabled", true);
  const [isDarkMode, setIsDarkMode] = useStorage("isDarkMode", true);
  const { Meta } = Card;
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch('https://copycat-extension.com/api/profile')
    .then(response => {
      if (response.status === 401) {
        setIsAuthenticated(false);
        setIsLoading(false);
        throw new Error('Unauthorized');
      }
      return response.json();
    })
      .then(data => {
        setProfilePictureUrl(data.profilePicture);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <Card
        title="Preferences"
        extra={
          isLoading ? 
            <Skeleton.Avatar active={true} size="large" shape="circle" /> : 
            <Avatar src={profilePictureUrl}/>
        }
        bordered={false}
        style={{ width: 320, borderRadius: 0}}
      >
        {!isLoading && !isAuthenticated &&
        <Alert
        message="Connect you Google account"
        type="warning"
        showIcon
        closable
        onClick={() => window.open('https://copycat-extension.com/login')}
        action={
          <Button size="small" type='text'>Connect</Button>
        }
        />
        }

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
            <Button type="primary" icon={<BulbFilled />} onClick={() => window.open('https://copycat-extension.com/feedback')} block>Send Feedback</Button>
          </List.Item>
        </List>
        
          
      </Card>

    </ThemeProvider>
  )
}

export default IndexPopup
