import React from 'react'
import Matrixbox from './UI/matrixbox'

const matrixBoxData = [
    {
        text: 1,
        bgcolor: "bg-lime-100",
    },
    {
        text: 2,
        bgcolor: "bg-lime-100",
    },
    {
        text: 3,
        bgcolor: "bg-lime-100",
    },
    {
        text: 4,
        bgcolor: "bg-lime-100",
    },
    {
        text: 5,
        bgcolor: "bg-lime-100",
    },
    {
        text: 6,
        bgcolor: "bg-lime-100",
    },
    {
        text: 7,
        bgcolor: "bg-lime-100",
    },
    {
        text: 8,
        bgcolor: "bg-lime-100",
    },
    {
        text: 9,
        bgcolor: "bg-lime-100",
    },
]

function FifthSection() {
    return (
        <div className='flex bg-white py-2 mt-4 rounded'>
            <div className='w-4/6'>
                <h1 className='px-2 text-lg font-semibold mb-4'>Talent Matrix box</h1>
                <div className='flex flex-col-reverse border-dashed border-l-2 border-b-2 w-60 ml-2 mb-2'>
                    {/* <div className='flex flex-row-reverse justify-end h-16 m-2'> */}
                    <div className='flex flex-row-reverse justify-end h-16 m-2'>
                        <Matrixbox text={1} bgColor='bg-lime-100' />
                        <Matrixbox text={2} bgColor='bg-red-300' />
                        <Matrixbox text={3} bgColor='bg-lime-300' />
                    </div>
                    <div className='flex flex-row-reverse justify-end h-16 m-2'>
                        <Matrixbox text={4} bgColor='bg-teal-200' />
                        <Matrixbox text={5} bgColor='bg-indigo-300' />
                        <Matrixbox text={6} bgColor='bg-orange-300' />
                    </div>
                    <div className='flex flex-row-reverse justify-end h-16 m-2'>
                        <Matrixbox text={7} bgColor='bg-pink-300' />
                        <Matrixbox text={8} bgColor='bg-emerald-200' />
                        <Matrixbox text={9} bgColor='bg-yellow-200' />
                    </div>
                </div>
            </div>
            <div className="h-[270px] overflow-y-scroll border-l-2 flex justify-end p-4">
                <div className='flex flex-col justify-between px-2' style={{ width: 270 }}>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2nd Semi-Annual 2022</p>
                    </div>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2nd Semi-Annual 2022</p>
                    </div>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2021</p>
                    </div>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2020</p>
                    </div>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2nd Semi-Annual 2022</p>
                    </div>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2nd Semi-Annual 2022</p>
                    </div>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2nd Semi-Annual 2022</p>
                    </div>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2nd Semi-Annual 2022</p>
                    </div>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2nd Semi-Annual 2022</p>
                    </div>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2nd Semi-Annual 2022</p>
                    </div>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2nd Semi-Annual 2022</p>
                    </div>
                    <div className='flex justify-start items-center mb-2'>
                        <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                        <p className='text-sm'>2nd Semi-Annual 2022</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FifthSection