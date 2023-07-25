import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';

interface DataType {
    key: string;
    competencyName: string;
    supervisor: any;
    member: any;
    surplus: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Competency Name',
        dataIndex: 'competencyName',
        key: 'competencyName',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Suoervisor',
        dataIndex: 'supervisor',
        key: 'supervisor',
    },
    {
        title: 'Member',
        dataIndex: 'member',
        key: 'member',
    },
    {
        title: 'Surplus',
        key: 'surplus',
        dataIndex: 'surplus',
        // render: (_, { tags }) => (
        //     <>
        //         {tags.map((tag) => {
        //             let color = tag.length > 5 ? 'geekblue' : 'green';
        //             if (tag === 'loser') {
        //                 color = 'volcano';
        //             }
        //             return (
        //                 <Tag color={color} key={tag}>
        //                     {tag.toUpperCase()}
        //                 </Tag>
        //             );
        //         })}
        //     </>
        // ),
    },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
];

const data: DataType[] = [
    {
        key: '1',
        competencyName: 'Budgeting',
        supervisor: <Image className='rounded-full border-yellow-400 border-2 p-1' src="/team2.jpg" height={48} style={{ height: 56 }} width={56} alt='first image' />,
        member: <Image className='rounded-full border-purple-400 border-2 p-1' src="/team2.jpg" height={48} style={{ height: 56 }} width={56} alt='first image' />,
        surplus: 2,
    },
    {
        key: '2',
        competencyName: 'Business Acumen',
        supervisor: <Image className='rounded-full border-yellow-400 border-2 p-1' src="/team2.jpg" height={48} style={{ height: 56 }} width={56} alt='first image' />,
        member: <Image className='rounded-full border-purple-400 border-2 p-1' src="/team2.jpg" height={48} style={{ height: 56 }} width={56} alt='first image' />,
        surplus: 5,
    },
    {
        key: '3',
        competencyName: 'Organizational Savvy',
        supervisor: <Image className='rounded-full border-yellow-400 border-2 p-1' src="/team2.jpg" height={48} style={{ height: 56 }} width={56} alt='first image' />,
        member: <Image className='rounded-full border-purple-400 border-2 p-1' src="/team2.jpg" height={48} style={{ height: 56 }} width={56} alt='first image' />,
        surplus: 3,
    },
];

const AppraisalTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default AppraisalTable;
