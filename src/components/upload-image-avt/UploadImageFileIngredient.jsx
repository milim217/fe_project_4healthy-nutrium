import React, { useState, useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Space, Upload } from "antd";

const UploadImageFileIngredient = () => {
  const [antPics, setAntPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState([]);

  const handleAnt = (e) => {
    console.log(e.file.originFileObj);
    setAntPics(e.file.originFileObj);
  };

  const sendAnt = async (e) => {
    setLoading(true);
    console.log("uploading...");
  };
  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size="large"
      >
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          maxCount={1}
          onChange={handleAnt}
        >
          <Button icon={<UploadOutlined />}>Thay ảnh</Button>
        </Upload>
      </Space>
    </div>
  );
};
export default UploadImageFileIngredient;
