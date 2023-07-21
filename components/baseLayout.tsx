import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import { Image } from 'antd';
import Topbar from "./topbar"

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home', '/', <PieChartOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />),
    getItem('About', 'about', <DesktopOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />),
    getItem('Teams', 'teamsChat', <TeamOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />),
    getItem('Users', 'sub1', <UserOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Teams', 'sub2', <TeamOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />, [getItem('Team 1', '20'), getItem('Team 2', '22')]),
    getItem('Prjects', '31', <FileOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />),
    getItem('Users', 'sub7', <UserOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />, [
        getItem('Tom', '6'),
        getItem('Bill', '7'),
        getItem('Alex', '8'),
    ]),
    getItem('Teams', 'sub3', <TeamOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />, [getItem('Team 2', '23'), getItem('Team 2', '24')]),
    getItem('Prjects', '32', <FileOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />),
    getItem('Users', 'sub8', <UserOutlined />, [
        getItem('Tom', '9'),
        getItem('Bill', '10'),
        getItem('Alex', '11'),
    ]),
    getItem('Teams', 'sub4', <TeamOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />, [getItem('Team 3', '25'), getItem('Team 2', '26')]),
    getItem('Prjects', '33', <FileOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />),
    getItem('Users', 'sub9', <UserOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />, [
        getItem('Tom', '12'),
        getItem('Bill', '13'),
        getItem('Alex', '14'),
    ]),
    getItem('Teams', 'sub5', <TeamOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />, [getItem('Team 4', '27'), getItem('Team 2', '28')]),
    getItem('Prjects', '34', <FileOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />),
    getItem('Users', 'sub10', <UserOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />, [
        getItem('Tom', '15'),
        getItem('Bill', '16'),
        getItem('Alex', '17'),
    ]),
    getItem('Teams', 'sub6', <TeamOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />, [getItem('Team 5', '29'), getItem('Team 2', '30')]),
    getItem('Prjects', '18', <FileOutlined style={{ fontSize: "1.25rem", color: "#B0B0B0" }} />),
];

const BaseLayout: React.FC = ({ children }) => {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: "#fff" }}>
                <div className='border bg-slate-100 p-2 h-[100px] flex justify-center'>
                    <Image src="/bullseyelogo.png" className='rounded-full' style={{ width: '5rem', marginTop: "0.25rem" }} alt=" logo" />
                </div>
                <Menu onClick={({ key }) => {
                    console.log(key)
                    router.push(key)
                }} defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <div className='flex'>
                        <div>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                    marginLeft: '24px',
                                }}
                            />
                        </div>
                        <Topbar />
                    </div>
                </Header>
                <Content>
                    {<div style={{ background: colorBgContainer }}>
                        {children}
                    </div>}
                </Content>
            </Layout>
        </Layout>
    );
};

export default BaseLayout;