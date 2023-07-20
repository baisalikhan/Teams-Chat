import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Tabs } from 'antd';

import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import ParentTab from "../components/teams/parentTab";
import GrandChildTab from '../components/teams/grandChildTab';

// import TablesinTab from '../components/assessment/parentTabs';
// import Dropdownn from '../components/UI/dropdown';
// import BlueDropdownn from '../components/UI/bluedropdown';
// import AvatarsGroup from '../components/UI/avatarsGroup';
// import CheckIn from '../components/checkIn/checkIn';
// import ActionPlan from '../components/actionPlan/actionPlan';
// import Chat from '../components/chat/chat';

// type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const App: React.FC = () => {
  // const [mode, setMode] = useState<TabPosition>('top');

  // const handleModeChange = (e: RadioChangeEvent) => {
  //   setMode(e.target.value);
  // };

  // const items = [{
  //   label: "Chat",
  //   key: "11",
  //   // disabled: i === 28,
  //   children: <Chat />,
  // },
  // {
  //   label: "Action Plan",
  //   key: "12",
  //   // disabled: i === 28,
  //   children: <ActionPlan />,
  // },
  // {
  //   label: "Check-In",
  //   key: "13",
  //   // disabled: i === 28,
  //   children: <CheckIn />,
  // },
  // {
  //   label: "Assessment",
  //   key: "14",
  //   // disabled: i === 28,
  //   children: (<TablesinTab />),
  // },
  // ]

  // type PositionType = 'left' | 'right';
  // const OperationsSlot: Record<PositionType, React.ReactNode> = {
  //   left: <div className="col-span-2 flex py-2 pl-2">
  //     <div className="flex items-center">
  //       <img
  //         src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
  //         className="rounded-full"
  //         style={{ width: '2rem', height: '2rem' }}
  //         alt="Avatar"
  //       />
  //     </div>
  //     <div className='flex items-center text-xl'>
  //       <h1 className="px-2 font-semibold">Developers</h1>
  //       <p>{">"}&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</p>
  //     </div>
  //   </div>,
  //   right: <div className='flex'>
  //     <AvatarsGroup />
  //     <BlueDropdownn ddtitle="Share with" />
  //     <Dropdownn ddtitle="Sign Off" />
  //   </div>,
  // };

  return (
    <div className='flex w-full h-[100%]'>
      <div className='flex flex-col w-[35vh] bg-white'>
        <div className='flex  justify-between p-2 border'>
          <div className='flex flex-1 ml-6 text-xl font-bold'>Teams</div>
          <div className='flex flex-1 justify-evenly items-center'>
            <PlusOutlined />
            <SearchOutlined />
          </div>
        </div>

        {/* Teams chats headers tabs Starts */}
        <ParentTab />
        {/* Teams chats headers tabs Ends */}

      </div>

      {/* chat screen */}
      <GrandChildTab />
      {/* <div className='flex w-full h-[93vh] bg-white'>
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
      </div> */}
    </div>
  );
};

export default App;