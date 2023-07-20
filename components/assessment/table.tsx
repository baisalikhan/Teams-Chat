import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  reviewFor: string;
  reviewDate: number;
  initiadedBy: string;
  status: string[];
  score: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Review For",
    dataIndex: "reviewFor",
    key: "reviewFor",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Review Date",
    dataIndex: "reviewDate",
    key: "reviewDate",
  },
  {
    title: "Initiaded By",
    dataIndex: "initiadedBy",
    key: "initiadedBy",
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
    title: "Score",
    dataIndex: "score",
    key: "score",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle" className="py-2 px-4 text-white" style={{ backgroundColor: "#1890FF" }}>
        <a>Assess</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    reviewFor: "John Brown",
    reviewDate: 32,
    initiadedBy: "New York No. 1 Lake Park",
    score: 0,
    status: ["Pending"],
  },
  {
    key: "2",
    reviewFor: "Jim Green",
    reviewDate: 42,
    initiadedBy: "London No. 1 Lake Park",
    score: 0,
    status: ["Pending"],
  },
  {
    key: "3",
    reviewFor: "Joe Black",
    reviewDate: 32,
    initiadedBy: "Sydney No. 1 Lake Park",
    score: 0,
    status: ["Pending"],
  },
];

const Tablee: React.FC = () => <Table columns={columns} dataSource={data} style={{ width: '100%' }} />;

export default Tablee;
