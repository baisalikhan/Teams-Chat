import React from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';

function AvatarsGroup() {
    return (
        <Avatar.Group className='mx-5'>
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            <a href="https://ant.design">
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
            </a>
            <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Tooltip>
            <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
        </Avatar.Group>
    )
}

export default AvatarsGroup;