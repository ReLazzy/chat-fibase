import { Spin } from "antd";
import React, { FC } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
const Loader: FC = () => {
  return <Spin style={{ margin: "10% 50%" }} indicator={antIcon} />;
};

export default Loader;
