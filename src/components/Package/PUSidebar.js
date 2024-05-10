import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  Layout, Menu } from 'antd';
const { Sider, Content } = Layout;

const PUSidebar = () => {
  const navigate = useNavigate();
  const [collapsed] = useState(false);

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: '100vh',        
          left: 0,
          background: 'lavender'
        }}
      >
        <div className="demo-logo-vertical" />
        <div
          style={{
            marginTop: 60,
            height: 64,
            borderBottom: '1px solid #555',
            textAlign: 'center',
            lineHeight: '64px',
            color: '#000', 
            fontSize: 24, 
          }}
        >
          Tour Packages
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={[]}
          style={{ marginTop: 60, background:'lavender', fontWeight:'bold'}}
          inlineIndent={20}
        >
          <Menu.Item key="1" onClick={() => handleMenuClick('/pintfc')} style={{  fontSize:'18px' }}>
            Home
          </Menu.Item>
          <Menu.Item key="2" onClick={() => handleMenuClick('/ucus')} style={{  fontSize:'18px' }}>
            Customize
            
          </Menu.Item>
          <Menu.Item key="3" onClick={() => handleMenuClick('/udashboard')} style={{  fontSize:'18px' }}>
            Own Packages
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default PUSidebar;
