import React from 'react'

function Topbar() {
    return (
        <div className='flex bg-slate-500 px-12'>
            <div className='flex-1'>Profile</div>
            <div className='flex flex-1 justify-end'>
                <div>Button 01</div>
                <div>Button 02</div>
                <div>Button 03</div>
                <div>Button 04</div>
            </div>
        </div>
    )
}

export default Topbar