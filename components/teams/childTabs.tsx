import React from 'react'
import TeamsProfile from './teamsProfile';

function ChildTabs({ status, announcementschk, favoritechk, recentchk }) {
    return (
        <>
            <h1>{status}</h1>
            {(status == "All" &&
                <div className='flex flex-col mt-4'>
                    <h3 className='ml-4 mt-4'>Announcement</h3>
                    <TeamsProfile teamName="Designers" />

                    <h3 className='ml-4 mt-4'>Favorite</h3>
                    <TeamsProfile teamName="Developers" />
                    <TeamsProfile teamName="Testers" />
                    <TeamsProfile teamName="Admin" />


                    <h3 className='ml-4 mt-4'>Recent</h3>
                    <TeamsProfile teamName="HRs" />
                    <TeamsProfile teamName="Helpers" />

                </div>

            )}
            {(status == "Read" &&
                <div className='flex flex-col mt-4'>
                    <TeamsProfile teamName="Security" />
                    <TeamsProfile teamName="Managers" />

                </div>

            )}

            {(status == "Unread" &&
                <div className='flex flex-col mt-4'>
                    <TeamsProfile teamName="Freelauncers" />
                    <TeamsProfile teamName="Vloggers" />
                    <TeamsProfile teamName="Gamers" />
                    <TeamsProfile teamName="Cooks" />

                </div>

            )}
        </>
    )
}

export default ChildTabs;