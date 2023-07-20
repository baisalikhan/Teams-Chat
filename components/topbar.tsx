import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

import {
  AiOutlineAlignLeft,
  AiFillMessage,
  AiOutlineHome,
  AiOutlineCheckCircle,
  AiOutlineUnorderedList,
  AiOutlineIdcard,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";

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
          <AiOutlineCheckCircle className="text-2xl" />
          <AiOutlineUnorderedList className="text-2xl" />
          <AiOutlineIdcard className="text-2xl" />
          <AiOutlineMail className="text-2xl" />
          <AiOutlineSetting className="text-2xl" />
        </div>
        {/* icon part end */}

        {/* User profile part start */}
        <div className="col-span-2 flex bg-slate-200">
          <div className="flex items-center">
            <img
              src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-full"
              style={{ width: '3.25rem', height: '3.25rem' }}
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
