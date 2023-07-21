import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Image from "next/image";
import { Avatar, Badge, Space } from 'antd';
import {
  AiOutlineAlignLeft,
  AiFillMessage,
  AiOutlineHome,
  AiOutlineCheckCircle,
  AiOutlineUnorderedList,
  AiOutlineIdcard,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineBell,
  AiTwotoneFlag,
  AiOutlineExclamationCircle
} from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa6";
import Badgee from "./UI/badge";

function Topbar() {
  return (
    <div className="flex flex-1 items-center justify-between">
      {/* input part start */}
      <div className="flex-1 ml-16">
        <Input
          size="large"
          className="w-[70%] h-10"
          placeholder="large size"
          prefix={<SearchOutlined />}
        />
      </div>
      {/* input part end */}
      <div className="flex mr-[3%]">
        {/* icons part start */}
        <div className="col-span-2 flex justify-center items-center space-x-6 mr-12">
          <FaRegMoon className="text-2xl" />
          <AiOutlineExclamationCircle className="text-2xl" />
          <AiTwotoneFlag className="text-2xl" />
          <Badgee badgeCount="7" badgeIcon={<AiOutlineMail className="text-black" />} />
          <Badgee badgeCount="3" badgeIcon={<AiOutlineBell className="text-black" />} />
        </div>
        {/* icon part end */}

        {/* User profile part start */}
        <div className="col-span-2 flex bg-slate-200">
          <div className="flex items-center">
            <Image
              src="/active.jpg"
              className="rounded-full"
              width={52}
              height={25}
              style={{ height: '3.25rem' }}
              alt="Avatar"
            />
          </div>
          <div className="flex flex-col justify-evenly pl-2">
            <p className="text-sm font-semibold">Asad Khan</p>
            <p className="text-xs">Operational Manager</p>
          </div>
        </div>
        {/* user profile part end */}
      </div>
    </div>
  );
}

export default Topbar;
