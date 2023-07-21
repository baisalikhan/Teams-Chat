import React, { useEffect, useState } from 'react';

import ParentTab from "../components/teams/parentTab";
import GrandChildTab from '../components/teams/grandChildTab';
import TeamsTopBar from '../components/teams/teamsTopBar';



const TeamChat: React.FC = () => {
    const [teamTitle, setTeamTitle] = useState("");

    useEffect(() => {

    }, [teamTitle])

    return (
        <div className='flex w-full h-[100%]'>
            <div className='flex flex-col w-[35vh] bg-white'>
                <TeamsTopBar />

                {/* Teams chats headers tabs Starts */}
                <ParentTab teamTitle={teamTitle} setTeamTitle={setTeamTitle} />
                {/* Teams chats headers tabs Ends */}

            </div>

            {/* chat screen */}
            <GrandChildTab />
        </div>
    );
};

export default TeamChat;