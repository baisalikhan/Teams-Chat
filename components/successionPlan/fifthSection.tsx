import React from 'react'
import Matrixbox from './UI/matrixbox'

const matrixBoxData01 = [
    {
        text: 1,
        bgcolor: "bg-lime-100",
    },
    {
        text: 2,
        bgcolor: "bg-red-300",
    },
    {
        text: 3,
        bgcolor: "bg-lime-300",
    },
]
const matrixBoxData02 = [
    {
        text: 4,
        bgcolor: "bg-teal-200",
    },
    {
        text: 5,
        bgcolor: "bg-indigo-300",
    },
    {
        text: 6,
        bgcolor: "bg-orange-300",
    },
]
const matrixBoxData03 = [
    {
        text: 7,
        bgcolor: "bg-pink-300",
    },
    {
        text: 8,
        bgcolor: "bg-emerald-200",
    },
    {
        text: 9,
        bgcolor: "bg-yellow-200",
    },
]

const annualData = [
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
    {
        key: '1',
        title: '2nd Semi-Annual 2022',
        arrows: [
            {
                leftArrowIcon: "",
                rightArrowIcon: ""
            }
        ]
    },
]

function FifthSection() {
    return (
        <div className='flex bg-white py-2 mt-4 rounded'>
            <div className='w-4/6'>
                <h1 className='px-2 text-lg font-semibold mb-4'>Talent Matrix box</h1>
                <div className='flex flex-col-reverse border-dashed border-l-2 border-b-2 w-60 ml-2 mb-2'>
                    <div className='flex flex-row-reverse justify-end h-16 m-2'>
                        {matrixBoxData01.map((item, index) => (
                            <Matrixbox text={item.text} bgColor={item.bgcolor} key={index} />
                        ))}
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
                    {annualData?.map((item, index) => (
                        <div className='flex justify-start items-center mb-2' key={index}>
                            <div className='w-2 h-2 bg-blue-500 mx-2 rounded-lg'></div>
                            <p className='text-sm'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default FifthSection