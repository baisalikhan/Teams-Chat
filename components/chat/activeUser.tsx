import React from 'react'
import Image from 'next/image'

function ActiveUser({ activeUserImgPath, activeUserName, activeUserMsgTime, activeUserMessage }) {

    return (
        <div className="chat-message">
            <div className='flex p-2 flex-row-reverse'>
                <div className="flex border p-2">
                    <Image
                        src={activeUserImgPath}
                        className="rounded-full"
                        width={70}
                        height={20}
                        style={{ height: 46 }}
                        alt="Avatar"
                    />
                </div>
                <div className='flex flex-col items-end'>
                    <div className='flex flex-row-reverse bg-yellow items-center p-2'>
                        <h2 className='text-lg font-semibold'>{activeUserName}</h2>
                        <h2 className='text-xs text-gray-500 pr-4'>{activeUserMsgTime}</h2>
                    </div>
                    <p className='bg-blue-300 w-[65%] p-2 rounded-lg flex items-end'>{activeUserMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default ActiveUser