import React from 'react'
import type { MenuProps } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

function BlueDropdownn({ ddtitle }) {
    const items: MenuProps['items'] = [
        {
            label: '1st menu item',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: '2nd menu item',
            key: '2',
            icon: <UserOutlined />,
        },
        {
            label: '3rd menu item',
            key: '3',
            icon: <UserOutlined />,
            danger: true,
        },
        {
            label: '4rd menu item',
            key: '4',
            icon: <UserOutlined />,
            danger: true,
            disabled: true,
        },
    ];

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <Dropdown menu={menuProps}>
            <Button className='mr-2 bg-blue-500 font-semibold text-white hover:bg-white'>
                <Space>
                    {ddtitle}
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
}

export default BlueDropdownn