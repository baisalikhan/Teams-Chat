import React, { ReactElement } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button } from 'antd';

interface DataType {
  key: string;
  title: string;
  assignedBy: string;
  assignedDate: string;
  status: string[];
  action: string | string[] | ReactElement;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Assigned By",
    dataIndex: "assignedBy",
    key: "assignedBy",
  },
  {
    title: "Assigned Date",
    dataIndex: "assignedDate",
    key: "assignedDate",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "Pending") {
            color = "orange";
          }
          return (
            <Tag color={color} key={tag} className="py-2 px-4 text-black">
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space
        size="middle"
        className="py-2 px-4 text-white"
        style={{ backgroundColor: "#1890FF" }}
      >
        <a>Assess</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    title: "Field Check-in and Check-out",
    assignedBy: "Shah G",
    assignedDate: "New York No. 1 Lake Park",
    status: ["Pending"],
    action: <Space
      size="middle"
      className="py-2 px-4 text-white"
      style={{ backgroundColor: "#1890FF" }}
    >
      <a>View</a>
    </Space>
  },
  {
    key: "2",
    title: "Field Check-in and Check-out",
    assignedBy: "Raja G",
    assignedDate: "New York No. 1 Lake Park",
    status: ["Pending"],
    action: <Space
      size="middle"
      className="py-2 px-4 text-white"
      style={{ backgroundColor: "#1890FF" }}
    >
      <a>View</a>
    </Space>
  },
  {
    key: "3",
    title: "Field Check-in and Check-out",
    assignedBy: "Khan G",
    assignedDate: "New York No. 1 Lake Park",
    status: ["Pending"],
    action: <Space
      size="middle"
      className="py-2 px-4 text-white"
      style={{ backgroundColor: "#1890FF" }}
    >
      <a>View</a>
    </Space>
  },
];

const CheckIn: React.FC = () => {
  type PositionType = 'left';
  const OperationsSlot: Record<PositionType, React.ReactNode> = {
    left: <span>&#160;&#160;&#160;</span>,
  };

  return (
    <div className='flex flex-col h-[80vh]  bg-gray-200'>
      <div className='flex items-center justify-between mx-9 my-6'>
        <h1 className='text-xl font-semibold'>Team Check-In History</h1>
        <Button type="primary" ghost style={{ backgroundColor: '#fff' }}>Initiate Assessment</Button>
      </div>

      <div className='flex justify-center'>
        <Table columns={columns} dataSource={data} style={{ width: "95%" }} />
      </div>
    </div>
  )
};

export default CheckIn;
