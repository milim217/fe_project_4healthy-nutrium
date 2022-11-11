import { Table, Button } from "antd";
import Slidebar from "../../components/common/slidebar/Slidebar";
import React, { useState } from "react";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    justify: "center",
  },
  {
    title: "Age",
    dataIndex: "age",
    justify: "center",
  },
  {
    title: "Address",
    dataIndex: "address",
    justify: "center",
  },
  {
    title: "Address",
    dataIndex: "address",
    justify: "center",
  },
  {
    title: "Address",
    dataIndex: "address",
    justify: "center",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <Button type="primary">Delete</Button>,
    justify: "center",
  },
];
const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const ListUser = () => {
  return (
    <Slidebar>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 600,
        }}
      />
    </Slidebar>
  );
};
export default ListUser;
