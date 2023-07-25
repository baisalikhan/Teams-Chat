import { useState } from 'react';
import { Steps } from 'antd';
import { DownOutlined, CarOutlined } from '@ant-design/icons';
import { AiFillAlipayCircle } from "react-icons/ai";

const { Step } = Steps;

const items = [
    {
        title: <span className='text-sm'>25/02/2021</span>,
        content: 'This is the content of step 1.',
    },
    {
        title: <span className='text-sm'>24/03/2022</span>,
        content: 'This is the content of step 2.',
    },
    {
        title: <span className='text-sm'>19/10/2022</span>,
        content: 'This is the content of step 3.',
    },
    {
        title: <span className='text-sm'>01/10/2022</span>,
        content: 'This is the content of step 2.',
    },
    {
        title: <span className='text-sm'>24/03/2022</span>,
        content: 'This is the content of step 3.',
    },
    {
        title: <span className='text-sm'>24/03/2022</span>,
        content: 'This is the content of step 2.',
    },
    {
        title: <span className='text-sm'>24/03/2022</span>,
        content: 'This is the content of step 3.',
    },
    // Add more steps if needed
];

const cardItems = [
    {
        title: "Health and Well-Being",
        content: 'This is the content of step 1.',
    },
    {
        title: 'Renew Packages - Error',
        content: 'This is the content of step 2.',
    },
    {
        title: 'Field Check-in and Check-out',
        content: 'This is the content of step 3.',
    },
    {
        title: 'Business travels',
        content: 'This is the content of step 2.',
    },
    {
        title: 'Business travels',
        content: 'This is the content of step 3.',
    },
    {
        title: 'Business travels',
        content: 'This is the content of step 2.',
    },
    {
        title: 'Step 3',
        content: 'This is the content of step 3.',
    },
    // Add more steps if needed
];

const FourthSection = () => {
    const [current, setCurrent] = useState(0);

    const onChange = (value: number) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    return (
        <>
            <h1 className='text-lg font-bold'>Overview</h1>
            <div className='flex px-2'>
                <div className="h-[250px] w-[700px] overflow-y-scroll flex justify-between p-4">
                    <div className="mt-18">
                        <Steps
                            current={current}
                            onChange={onChange}
                            direction="vertical"
                            items={items}
                        />
                    </div>
                    <div className="">
                        {cardItems.map((step, index) => (

                            <div key={index} className="mb-3 bg-white flex shadow-md rounded">
                                <div className='w-2 h-2 rotate-45 bg-white' style={{ marginLeft: "-5px", marginTop: "15px" }}></div>
                                <div>
                                    <h2 className="text-sm font-semibold">{step.title}</h2>
                                    <p className='text-xs text-gray-300'>{step.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-between px-2 flex-wrap' style={{ width: 250 }}>
                        <div className='bg-white w-28 rounde shadow-sm h-24 flex flex-col justify-center pl-7 mb-2'>
                            <p className=''>TDP:</p>
                            <p className='text-xl font-bold'>3/5</p>
                        </div>
                        <div className='bg-white w-28 h-24 flex flex-col justify-center pl-7 mb-2'>
                            <p className=''>TDP:</p>
                            <p className='text-xl font-bold'>3/5</p>
                        </div>
                        <div className='bg-white w-28 h-24 flex flex-col justify-center pl-7 mb-2'>
                            <p className=''>TDP:</p>
                            <p className='text-xl font-bold'>3/5</p>
                        </div>
                        <div className='bg-white w-28 h-24 flex flex-col justify-center pl-7 mb-2'>
                            <p className=''>TDP:</p>
                            <p className='text-xl font-bold'>3/5</p>
                        </div>
                        <div className='bg-white w-28 h-24 flex flex-col justify-center pl-7 mb-2'>
                            <p className=''>TDP:</p>
                            <p className='text-xl font-bold'>3/5</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default FourthSection;
