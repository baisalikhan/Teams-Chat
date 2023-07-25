import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';
import type { TabsProps } from 'antd';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const Content = () => { return (<p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Tortor blandit dictum auctor id eu. Volutpat libero nunc eu urna curabitur ut iaculis. Erat netus nisi sem pulvinar maecenas ut laoreet diam. Risus turpis risus at auctor pretium amet imperdiet commodo. Egestas gravida vel leo fusce orci. Risus orci quam id ipsum eu vel nunc. Nulla blandit ornare nulla viverra tempor. At sed sed dictum massa malesuada at. Lectus at semper eu aenean.Turpis ipsum fermentum turpis et.Quis faucibus ac volutpat facilisis gravida urna ullamcorper a risus.Luctus in lacus aliquam porttitor.Elit platea vitae sed est purus. Est at convallis ullamcorper viverra sapien sed sed sit.Dolor massa sed ac eu.Amet elementum lectus ornare cum massa.Tortor ultricies ultrices tristique cursus.Faucibus curabitur malesuada praesent morbi neque mauris.Et aliquam in sed hac mauris erat.Sit feugiat nibh consequat vitae feugiat.Vestibulum elementum nisl quis praesent vel sit etiam</p>) }

const items: TabsProps['items'] = [
    {
        key: '1',
        label: <span className='pl-2'>Strengths</span>,
        children: <Content />,
    },
    {
        key: '2',
        label: <span className='pl-2'>Development Areas</span>,
        children: <Content />,
    },
    {
        key: '3',
        label: <span className='pl-2'>Career Interests</span>,
        children: <Content />,
    },
    {
        key: '4',
        label: <span className='pl-2'>Potential Long Term Career Path</span>,
        children: <Content />,
    },
    {
        key: '5',
        label: <span className='pl-2'>Potential Short Term Con...</span>,
        children: <Content />,
    },
    {
        key: '6',
        label: <span className='pl-2'>Development Areas 03</span>,
        children: <Content />,
    },
    {
        key: '7',
        label: <span className='pl-2'>Development Areas 04</span>,
        children: <Content />,
    },
];

const SecondTabs: React.FC = () => {
    const [mode, setMode] = useState<TabPosition>('top');

    const handleModeChange = (e: RadioChangeEvent) => {
        setMode(e.target.value);
    };

    return (
        <div className='bg-white mt-4 rounded-lg'>
            <Tabs
                defaultActiveKey="1"
                tabPosition={mode}
                className='rounded-lg px-2'
                style={{ height: 250 }}
                items={items}
            // items={new Array(30).fill(null).map((_, i) => {
            //     const id = String(i);
            //     return {
            //         label: `Tab-${id}`,
            //         key: id,
            //         disabled: i === 28,
            //         children: `Content of tab ${id}`,
            //     };
            // })}
            />
        </div>
    );
};

export default SecondTabs;