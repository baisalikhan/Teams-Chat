import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Tabs } from 'antd';

import TablesinTab from '../assessment/parentTabs';
import Dropdownn from '../UI/dropdown';
import BlueDropdownn from '../UI/bluedropdown';
import AvatarsGroup from '../UI/avatarsGroup';
import CheckIn from '../checkIn/checkIn';
import ActionPlan from '../actionPlan/actionPlan';
import Chat from '../chat/chat';

import Image from 'next/image';

import { Button, Drawer, Select, Space } from 'antd';
import TeamDetails from './TeamDetails';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';
const { Option } = Select;

function GrandChildTab() {
    const [mode, setMode] = useState<TabPosition>('top');

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleModeChange = (e: RadioChangeEvent) => {
        setMode(e.target.value);
    };

    const items = [{
        label: "Chat",
        key: "11",
        // disabled: i === 28,
        children: <Chat />,
    },
    {
        label: "Action Plan",
        key: "12",
        // disabled: i === 28,
        children: <ActionPlan />,
    },
    {
        label: "Check-In",
        key: "13",
        // disabled: i === 28,
        children: <CheckIn />,
    },
    {
        label: "Assessment",
        key: "14",
        // disabled: i === 28,
        children: (<TablesinTab />),
    },
    ]

    type PositionType = 'left' | 'right';
    const OperationsSlot: Record<PositionType, React.ReactNode> = {
        left: <div className="col-span-2 flex py-1.5 pl-2">
            <div className="flex items-center">
                <Image
                    onClick={showDrawer}
                    src="/team2.jpg"
                    className="rounded-full hover:cursor-pointer"
                    width={39}
                    height={39}
                    style={{ height: 39 }}
                    alt="Avatar"
                />
                <Drawer
                    title="Create a new account"
                    width={720}
                    onClose={onClose}
                    open={open}
                    bodyStyle={{ paddingBottom: 80 }}
                    extra={
                        <Space>
                            <Button onClick={onClose}>Cancel</Button>
                            <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Submitt
                            </button>
                        </Space>
                    }
                >
                    <TeamDetails />
                </Drawer>
            </div>
            <div className='flex items-center text-xl'>
                <h1 className="px-2 font-semibold">Developers</h1>
                <p>{">"}&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</p>
            </div>
        </div>,
        right: <div className='flex'>
            <AvatarsGroup />
            <BlueDropdownn ddtitle="Share with" />
            <Dropdownn ddtitle="Sign Off" />
        </div>,
    };

    return (
        <div className='flex w-full h-[93vh] bg-white'>
            <Tabs
                tabBarExtraContent={OperationsSlot}
                defaultActiveKey="1"
                tabPosition={mode}
                style={{ height: 720, width: '96.5%' }}
                items={items}
            // items={new Array(5).fill(null).map((_, i) => {
            //   const id = String(i);
            //   return {
            //     label: `Name of the Team-${id}`,
            //     key: id,
            //     disabled: i === 28,
            //     children: `Content of tab ${id}`,
            //   };
            // })}

            />
        </div>
    )
}

export default GrandChildTab