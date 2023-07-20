import React, { useState } from 'react'
import { Button, Drawer, Space } from 'antd';
import DrawerForm from './drawerForm';
import Cardd from './card';

function ActionPlan() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='flex flex-col bg-gray-200'>
            <div className='flex items-center justify-between mx-9 my-6'>
                <h1 className='text-xl font-semibold'>Action Plan</h1>
                <div>
                    <button className="bg-white rounded mr-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500">
                        Action Plan
                    </button>
                    {/* <Button onClick={showDrawer} className="bg-blue-300 text-white">Add</Button> */}
                    <button onClick={showDrawer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add
                    </button>
                </div>
            </div>



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
                <DrawerForm />
            </Drawer>

            <div className='flex flex-wrap gap-6 px-12 '>
                <Cardd cardTitle="NW Houston Field Team" />
                <Cardd cardTitle="Talent Development Plans" />
                <Cardd cardTitle="Bay Area Project" />
            </div>
        </div>
    )
}

export default ActionPlan;