import React from 'react'
import { Button } from 'antd';

function TeamsProfile({ teamName }) {
    return (
        <Button className='w-full h-full border-x-0 border-y-0 p-0'>
            <div className="col-span-2 flex py-2 pl-2 border-x-0 border-y-2">
                <div className='flex'>
                    <div className="flex items-center">
                        <img
                            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            className="rounded-full"
                            style={{ width: 39, height: 39 }}
                            alt="Avatar"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">{teamName}</p>
                        <p className="text-xs pt-2 px-2">Operational Manager</p>
                    </div>
                </div>
            </div>
        </Button >
    )
}

export default TeamsProfile;