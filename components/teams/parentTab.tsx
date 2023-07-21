import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ChildTabs from './childTabs';

import { Button, Checkbox, Divider } from 'antd';
import GrandChildTab from './grandChildTab';

const onChange = (key: string) => {
    console.log(key);
};

// This is the main tab bar of the page

const ParentTab: React.FC = ({ teamTitle, setTeamTitle }) => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `All`,
            children: (<ChildTabs teamTitle={teamTitle} setTeamTitle={setTeamTitle} status="All" />),
        },
        {
            key: '2',
            label: `Read`,
            children: (<ChildTabs teamTitle={teamTitle} setTeamTitle={setTeamTitle} status="Read" />),
        },
        {
            key: '3',
            label: `Unread`,
            children: (<ChildTabs teamTitle={teamTitle} setTeamTitle={setTeamTitle} status="Unread" />),
        },
    ];



    type PositionType = 'left';
    const OperationsSlot: Record<PositionType, React.ReactNode> = {
        left: <span>&#160;&#160;&#160;</span>,
    };

    return (
        <Tabs tabBarExtraContent={OperationsSlot} defaultActiveKey="1" items={items} onChange={onChange} className='bg-white' />
    )
}

export default ParentTab;