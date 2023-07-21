import React from 'react'
import Image from 'next/image'

function NonActiveUser({ NonActiveUserImgPath, NonActiveUserName, NonActiveUserMsgTime, NonActiveUserMessage }) {

    return (
        <div className="chat-message">
            <div className='flex p-2'>
                <div className="flex border p-2">
                    <Image
                        src={NonActiveUserImgPath}
                        className="rounded-full"
                        width={70}
                        height={20}
                        style={{ height: 46 }}
                        alt="Avatar"
                    />
                </div>
                <div className='flex flex-col border'>
                    <div className='flex bg-yellow items-center p-2'>
                        <h2 className='text-lg font-semibold'>{NonActiveUserName}</h2>
                        <h2 className='text-xs text-gray-500'>&#160; &#160; &#160;{NonActiveUserMsgTime}</h2>
                    </div>
                    <p className='bg-white w-[65%] p-2 rounded-lg'>{NonActiveUserMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default NonActiveUser