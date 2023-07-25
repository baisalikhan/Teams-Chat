import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';

import Tabs from "./sectionOne/tabs"
import SecondTabs from './sectionTwo/secondTabs';
import ThirdSection from './thirdSection';
import FourthSection from './fourthSection';
import FifthSection from './fifthSection';
import SixthSection from './sixthSection';

const Index: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        Succession Plan
        <Button onClick={showDrawer} className='ml-6'>Details</Button>
      </Space>
      <Drawer
        style={{ backgroundColor: "#EEEEEE" }}
        title="Stats"
        placement="right"
        size="large"
        onClose={onClose}
        open={open}
        headerStyle={{
          display: 'flex',
          justifyContent: 'end',
          justifyItems: 'end'
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <Tabs />
        <SecondTabs />
        <ThirdSection />

        <FourthSection />
        <FifthSection />
        <SixthSection />
      </Drawer >
    </>
  );
};

export default Index;