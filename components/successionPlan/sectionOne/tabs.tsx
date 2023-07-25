import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import PersonalDetails from './personalDetails';
import PositionHistory from './positionHistory';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: <span className='pl-2'>Personal Detail</span>,
        children: <PersonalDetails />,
    },
    {
        key: '2',
        label: <span className='pl-2'>Position History</span>,
        children: <PositionHistory />,
    },
];

const Tab: React.FC = () => <Tabs style={{ backgroundColor: "#fff" }} className='rounded-lg' defaultActiveKey="1" items={items} onChange={onChange} />;

export default Tab;