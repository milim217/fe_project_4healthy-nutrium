import React from "react";
import { Card, Col, Row } from "antd";
import Slidebar from "../../components/common/slidebar/Slidebar";
import { Progress } from "antd";

const DashboardAdmin = () => {
  return (
    <Slidebar>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              <Progress type="circle" percent={75} />
              <Progress type="circle" percent={70} status="exception" />
              <Progress type="circle" percent={100} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </Slidebar>
  );
};

export default DashboardAdmin;
