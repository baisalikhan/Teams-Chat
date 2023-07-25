import React from 'react'

function PersonalDetails() {
    return (
        <div className='p-2'>
            <div className='flex justify-between'>
                <div className='mb-6 flex-1'>
                    <p className='text-sm text-gray-400'>In this job position since:</p>
                    <h3 className='font-semibold'>July 2005</h3>
                </div>
                <div className='flex-1 flex flex-col justify-start items-center'>
                    <p className='text-sm text-gray-400'>Hire Date:</p>
                    <h3>July 2010</h3>
                </div>
                <div className='flex-1 flex flex-col items-center'>
                    <p className='text-sm text-gray-400'>Hiring Position:</p>
                    <h3>Financial Analyst</h3>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='mb-6 flex-1'>
                    <p className='text-sm text-gray-400'>Special Skills:</p>
                    <h3>Accounting Systems Specialist</h3>
                </div>
                <div className='flex-1 flex flex-col justify-start items-center'>
                    <p className='text-sm text-gray-400'>Certifications/ Licenses:</p>
                    <h3>CPA</h3>
                </div>
                <div className='flex-1 flex flex-col items-center'>
                    <p className='text-sm text-gray-400'>Work Location:</p>
                    <h3>Hartford, CT</h3>
                </div>
            </div>
            <div className='flex'>
                <div className='mb-6'>
                    <p className='text-sm text-gray-400'>Education/ Degrees:</p>
                    <h3>BS-History, MS-Finance,  working on MBA - to be completed 2023</h3>
                </div>
                <div className='ml-32'>
                    <p className='text-sm text-gray-400'>Language:</p>
                    <h3>English, Spanish</h3>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails