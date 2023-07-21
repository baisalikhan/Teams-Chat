import React, { useState } from 'react'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'

import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import AddNewTeamForm from './addNewTeamForm';

const { Option } = Select;

function TeamsTopBar() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='flex  justify-between p-2 border'>
            <div className='flex flex-1 ml-6 text-xl font-bold'>Teams</div>
            <div className='flex flex-1 justify-evenly items-center'>
                <button type="button" onClick={showDrawer} className="rounded-full transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                    {/* <AiOutlineAudio className="h-6 w-6 text-gray-600" /> */}
                    <PlusOutlined className="h-6 w-6 text-gray-600" />
                </button>
                <button type="button" className="rounded-full transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                    {/* <AiOutlineAudio className="h-6 w-6 text-gray-600" /> */}
                    <SearchOutlined className="h-6 w-6 text-gray-600" />
                </button>
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
                <AddNewTeamForm />
            </Drawer>
        </div>
    )
}

export default TeamsTopBar