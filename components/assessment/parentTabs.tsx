import React from 'react'
import Tablee from "./table"
import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Initiated Assessments`,
    children: (<><div className='w-full h-4 bg-gray-200'></div><Tablee /></>),
  },
  {
    key: '2',
    label: `Team/Peer Assessments`,
    children: (<><div className='w-full h-4 bg-gray-200'></div><Tablee /></>),
  },
  {
    key: '3',
    label: `Self Assessments`,
    children: (<><div className='w-full h-4 bg-gray-200'></div><Tablee /></>),
  },
  {
    key: '4',
    label: `Other Assessments`,
    children: (<><div className='w-full h-4 bg-gray-200'></div><Tablee /></>),
  },
];

function TablesinTab() {
  type PositionType = 'left';
  const OperationsSlot: Record<PositionType, React.ReactNode> = {
    left: <span>&#160;&#160;&#160;</span>,
  };

  return (
    <div className='flex flex-col h-[80vh]  bg-gray-200'>
      <div className='flex items-center justify-between mx-9 my-6'>
        <h1 className='text-xl font-semibold'>Team Assessment History</h1>
        <Button type="primary" ghost style={{ backgroundColor: '#fff' }}>Initiate Assessment</Button>
      </div>

      <div className='flex justify-center'>
        <Tabs tabBarExtraContent={OperationsSlot} defaultActiveKey="2" items={items} onChange={onChange} className='w-[95%] bg-white' />
        {/* <Tablee /> */}
      </div>
    </div>
  )
}

export default TablesinTab;