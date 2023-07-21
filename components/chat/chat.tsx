import React from 'react'
import { AiOutlineAudio, AiOutlineSend } from "react-icons/ai";
import ActiveUser from './activeUser';
import NonActiveUser from './nonActiveUser';

function Chat() {
    const activeUserImgPath = "/team4.jpg";
    const activeUserName = "Penney J. Hereford";
    const activeUserMsgTime = "Yesterday, 08:29 pm";
    const activeUserMessage = "Lorem ipsum dolor sit amet consectetur. Interdum et lobortis pulvinar in quam tempus pulvinar purus sit. Nec gravida non justo scelerisque. Neque lacus rhoncus ut enim leo habitasse. Gravida nunc tristique volutpat morbi eget in morbi turpis nulla. Senectus fermentum urna convallis lorem.";

    const NonActiveUserImgPath = "/nonActive.jpg"
    const NonActiveUserName = "Penney J. Hereford";
    const NonActiveUserMsgTime = "Yesterday, 08:29 pm";
    const NonActiveUserMessage = "Lorem ipsum dolor sit amet consectetur. Interdum et lobortis pulvinar in quam tempus pulvinar purus sit. Nec gravida non justo scelerisque. Neque lacus rhoncus ut enim leo habitasse. Gravida nunc tristique volutpat morbi eget in morbi turpis nulla. Senectus fermentum urna convallis lorem.";

    return (
        <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col bg-gray-200 h-[85vh]">

            {/* Messages Starts Here */}
            <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

                {/* message by non active user */}
                <NonActiveUser NonActiveUserImgPath={NonActiveUserImgPath} NonActiveUserName={NonActiveUserName} NonActiveUserMsgTime={NonActiveUserMsgTime} NonActiveUserMessage={NonActiveUserMessage} />

                {/* message by active user */}
                <ActiveUser activeUserImgPath={activeUserImgPath} activeUserName={activeUserName} activeUserMsgTime={activeUserMsgTime} activeUserMessage={activeUserMessage} />

                {/* message by non active user */}
                <NonActiveUser NonActiveUserImgPath={NonActiveUserImgPath} NonActiveUserName={NonActiveUserName} NonActiveUserMsgTime={NonActiveUserMsgTime} NonActiveUserMessage={NonActiveUserMessage} />

                {/* message by active user */}
                <ActiveUser activeUserImgPath={activeUserImgPath} activeUserName={activeUserName} activeUserMsgTime={activeUserMsgTime} activeUserMessage={activeUserMessage} />

                {/* message by non active user */}
                <NonActiveUser NonActiveUserImgPath={NonActiveUserImgPath} NonActiveUserName={NonActiveUserName} NonActiveUserMsgTime={NonActiveUserMsgTime} NonActiveUserMessage={NonActiveUserMessage} />

                {/* message by active user */}
                <ActiveUser activeUserImgPath={activeUserImgPath} activeUserName={activeUserName} activeUserMsgTime={activeUserMsgTime} activeUserMessage={activeUserMessage} />

                {/* message by non active user */}
                <NonActiveUser NonActiveUserImgPath={NonActiveUserImgPath} NonActiveUserName={NonActiveUserName} NonActiveUserMsgTime={NonActiveUserMsgTime} NonActiveUserMessage={NonActiveUserMessage} />

                {/* message by active user */}
                <ActiveUser activeUserImgPath={activeUserImgPath} activeUserName={activeUserName} activeUserMsgTime={activeUserMsgTime} activeUserMessage={activeUserMessage} />

                {/* message by non active user */}
                <NonActiveUser NonActiveUserImgPath={NonActiveUserImgPath} NonActiveUserName={NonActiveUserName} NonActiveUserMsgTime={NonActiveUserMsgTime} NonActiveUserMessage={NonActiveUserMessage} />

                {/* message by active user */}
                <ActiveUser activeUserImgPath={activeUserImgPath} activeUserName={activeUserName} activeUserMsgTime={activeUserMsgTime} activeUserMessage={activeUserMessage} />

            </div>
            {/* Messages Ends Here */}

            <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                <div className="relative flex">
                    <span className="absolute inset-y-0 flex items-center">

                        {/* attach's button */}
                        <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                        </button>

                        {/* emoji's button */}
                        <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>

                    </span>
                    <input type="text" placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-20 rounded-md py-3" />
                    <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                        {/* any icon/button will be added here if needed */}

                        {/* mic's button */}
                        <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <AiOutlineAudio className="h-6 w-6 text-gray-600" />
                        </button>

                        {/* send's button */}
                        <button type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                            <span className="font-bold">Send</span>
                            <AiOutlineSend className='h-6 w-6 ml-2' />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Chat;