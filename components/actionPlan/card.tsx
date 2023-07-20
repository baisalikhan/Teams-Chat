import React from 'react'
import { Card, Space } from 'antd';

function Cardd({ cardTitle }) {
    return (
        <Card title={cardTitle} extra={<a href="#" > More</a>} style={{ width: '47%' }}>
            {/* Issue */}
            <div className='border-y-[1px] py-2'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>Issue: </h2>
                    <p className='text-xs text-gray-600'>By: Adam, John @Apr 14, 2020</p>
                </div>
                <p className='mt-1'>Employees at south region location are not consistently showing up at the beginning of their shift schedule.</p>
            </div>
            {/* Cause */}
            <div className='border-y-[1px] py-2'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>Cause: </h2>
                </div>
                <p className='mt-1'>The new supervisor has been too relaxed with establishing proper work hours with his hourly workers. Hence, these employees are showing up past their shift schedule.</p>
            </div>
            {/* Note */}
            <div className='border-y-[1px] py-2'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>Note: </h2>
                </div>
                <p className='mt-1'>Please connect with your HRBP on status updates as well.</p>
            </div>
            {/* Assign To */}
            <div className='border-y-[1px] py-2'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>Assign To: </h2>
                    <p className='text-sm text-gray-600 flex'>
                        <span className='p-2 flex items-center'>
                            <div className='bg-green-500 mr-1 w-4 h-3 rounded-sm text-green-500'></div>Completed
                        </span>
                        <span className='p-2 flex items-center'>
                            <div className='bg-red-500 mr-1 w-4 h-3 rounded-sm text-red-500'></div>Action Required
                        </span>
                    </p>
                </div>
                <div className='flex flex-wrap justify-evenly text-sm text-gray-600'>
                    <span className='border p-2.5 flex items-center mt-1'>
                        <div className='bg-green-500 mr-1 w-4 h-3 rounded-sm text-green-500'></div>John, Adam
                    </span>
                    <span className='border p-2.5 flex items-center mt-1'>
                        <div className='bg-green-500 mr-1 w-4 h-3 rounded-sm text-green-500'></div>Carter, Carlton
                    </span>
                    <span className='border p-2.5 flex items-center mt-1'>
                        <div className='bg-red-500 mr-1 w-4 h-3 rounded-sm text-red-500'></div>Abdul-Haqq, Nilam
                    </span>
                    <span className='border p-2.5 flex items-center mt-1'>
                        <div className='bg-green-500 mr-1 w-4 h-3 rounded-sm text-green-500'></div>Ghazal, Ershadvand
                    </span>
                    <span className='border p-2.5 flex items-center mt-1'>
                        <div className='bg-red-500 mr-1 w-4 h-3 rounded-sm text-red-500'></div>Adams, Angela
                    </span>
                    <span className='border p-2.5 flex items-center mt-1'>
                        <div className='bg-green-500 mr-1 w-4 h-3 rounded-sm text-green-500'></div>John, Adam
                    </span>
                </div>
            </div>
            {/* Who */}
            <div className='mb-4 border-y-[1px] pt-2 pb-5'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-semibold'>Who: </h2>
                </div>
                <p className='mt-1'>All Electrical Line Workers who install, maintain and repair power lines and equipment in difficult weather conditions and all hours of the day or night.</p>
            </div>

            {/* Dates */}
            <div className='flex mt-4'>
                <div className='flex flex-1 flex-col'>
                    <h2 className='text-sm font-semibold'>Date of Occurence: </h2>
                    <p>03/02/2020</p>
                </div>
                <div className='flex-1'>
                    <h2 className='text-sm font-semibold'>Due Date: </h2>
                    <p>03/02/2020</p>
                </div>
            </div>
        </Card >
    )
}

export default Cardd