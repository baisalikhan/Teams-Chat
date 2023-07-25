import React from 'react'
import Appraisalplot from './UI/plot'
import AppraisalTable from './UI/table'

function SixthSection() {
    return (
        <div className='flex mt-4'>
            <div className='bg-white mt-14 mx-1 rounded' style={{ height: '340px' }}>
                <Appraisalplot />
            </div>
            <div className=''>
                <div className='w-full flex justify-between'>
                    <h1 className='text-gray-500  py-4 font-semibold'>Business Competencies</h1>
                    <div className='flex justify-end items-center'>
                        <div className='flex justify-center items-center'>
                            <div className='w-2 h-2 bg-green-500 mx-2'></div>
                            <h4>Target</h4>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='w-2 h-2 bg-yellow-500 mx-2'></div>
                            <h4>Member</h4>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='w-2 h-2 bg-purple-500 mx-2'></div>
                            <h4>Manager</h4>
                        </div>
                    </div>
                </div>
                <AppraisalTable />
            </div>
        </div>
    )
}

export default SixthSection