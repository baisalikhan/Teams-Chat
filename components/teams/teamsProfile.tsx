import React from 'react'
import { Button } from 'antd';
import Image from 'next/image';

function TeamsProfile({ teamName, teamImg, setTeamTitle, newMessages, activeTime, lastMessage }) {
    return (
        <div className="col-span-2 flex justify-start py-2 pl-2border-x-0 border-y-1">
            <Button onClick={() => setTeamTitle = { teamName }} className='w-full h-full border-x-0 border-y-0 p-0 m-0'>
                <div className='flex justify-start w-full'>
                    <div className="flex items-center px-2">
                        <Image
                            src={teamImg}
                            className="rounded-full"
                            width={48}
                            height={39}
                            style={{ height: 40 }}
                            alt="Avatar"
                        />
                    </div>
                    <div className='flex flex-col justify-evenly items-start px-2 w-full'>
                        <div className='w-full flex items-center justify-between'>
                            <h2 className="text-sm font-semibold">{teamName}</h2>
                            <p className="text-xs text-gray-400">{activeTime}</p>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <p className="text-xs pt-1 text-gray-400">{newMessages ? newMessages + " new messages" : lastMessage}</p>
                            {newMessages &&
                                <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                            }
                        </div>
                    </div>
                </div>
            </Button >
        </div>
    )
}

export default TeamsProfile;