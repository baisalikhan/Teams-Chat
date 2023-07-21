import React from 'react'
import { Avatar, Badge, Space } from 'antd';

function Badgee({ badgeCount, badgeIcon }) {
    return (
        <Badge count={badgeCount} className='w-6 h-7 pt'>
            <Avatar shape="circle" size="large" style={{ backgroundColor: 'transparent' }} icon={badgeIcon} />
        </Badge >
    )
}

export default Badgee