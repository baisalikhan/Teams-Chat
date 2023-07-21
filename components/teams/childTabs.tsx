import React from 'react'
import TeamsProfile from './teamsProfile';

// function ChildTabs({ status, announcementschk, favoritechk, recentchk, setTeamTitle }) {
function ChildTabs({ status, setTeamTitle }) {
    const teamImg1 = "/team1.jpg"
    const teamImg2 = "/team2.jpg"
    const teamImg3 = "/team3.jpg"
    const teamImg6 = "/team4.jpg"
    const teamImg4 = "/team5.jpg"
    const teamImg5 = "/team6.jpg"
    return (
        <>
            {(status == "All" &&
                <div className='flex flex-col mt-2'>
                    <h3 className='ml-4 mt-4'>Announcement</h3>
                    <TeamsProfile teamName="Designers" teamImg={teamImg1} setTeamTitle={setTeamTitle} newMessages={false} lastMessage="Please push the code to github" activeTime="2hr" />

                    <h3 className='ml-4 mt-4'>Favorite</h3>
                    <TeamsProfile teamName="Developers" teamImg={teamImg2} setTeamTitle={setTeamTitle} newMessages={"16"} lastMessage="Please push the code to github" activeTime="yesterday" />
                    <TeamsProfile teamName="Testers" teamImg={teamImg3} setTeamTitle={setTeamTitle} newMessages={"13"} lastMessage="Please push the code to github" activeTime="20hr" />
                    <TeamsProfile teamName="Admin" teamImg={teamImg4} setTeamTitle={setTeamTitle} newMessages={false} lastMessage="Please push the code to github" activeTime="30min" />


                    <h3 className='ml-4 mt-4'>Recent</h3>
                    <TeamsProfile teamName="HRs" teamImg={teamImg5} setTeamTitle={setTeamTitle} newMessages={"7"} lastMessage="Please push the code to github" activeTime="week ago" />
                    <TeamsProfile teamName="Helpers" teamImg={teamImg6} setTeamTitle={setTeamTitle} newMessages={false} lastMessage="Please push the code to github" activeTime="6hr" />

                    <TeamsProfile teamName="Security" teamImg={teamImg3} setTeamTitle={setTeamTitle} newMessages={false} lastMessage="Please push the code to github" activeTime="16hr" />
                    <TeamsProfile teamName="Managers" teamImg={teamImg6} setTeamTitle={setTeamTitle} newMessages={"22"} lastMessage="Please push the code to github" activeTime="3hr" />

                </div>

            )}

            {(status == "Read" &&
                <div className='flex flex-col mt-2'>
                    <TeamsProfile teamName="Designers" teamImg={teamImg1} setTeamTitle={setTeamTitle} newMessages={false} lastMessage="Please push the code to github" activeTime="2hr" />
                    <TeamsProfile teamName="Admin" teamImg={teamImg4} setTeamTitle={setTeamTitle} newMessages={false} lastMessage="Please push the code to github" activeTime="30min" />
                    <TeamsProfile teamName="Helpers" teamImg={teamImg6} setTeamTitle={setTeamTitle} newMessages={false} lastMessage="Please push the code to github" activeTime="6hr" />
                </div>

            )}

            {(status == "Unread" &&
                <div className='flex flex-col mt-2'>
                    <TeamsProfile teamName="Developers" teamImg={teamImg2} setTeamTitle={setTeamTitle} newMessages={"16"} lastMessage="Please push the code to github" activeTime="yesterday" />
                    <TeamsProfile teamName="Testers" teamImg={teamImg3} setTeamTitle={setTeamTitle} newMessages={"13"} lastMessage="Please push the code to github" activeTime="20hr" />
                    <TeamsProfile teamName="HRs" teamImg={teamImg5} setTeamTitle={setTeamTitle} newMessages={"7"} lastMessage="Please push the code to github" activeTime="week ago" />
                    <TeamsProfile teamName="Managers" teamImg={teamImg6} setTeamTitle={setTeamTitle} newMessages={"22"} lastMessage="Please push the code to github" activeTime="3hr" />
                </div>

            )}
        </>
    )
}

export default ChildTabs;