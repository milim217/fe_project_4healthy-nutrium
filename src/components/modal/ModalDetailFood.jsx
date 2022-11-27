import React, { useState } from "react";
import { Button, Modal, Card, Col, Row } from "antd";
import "../../assets/style/common/Modal-detail.css";
import { Image } from "antd";
const ModalDetailFood = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Xem chi tiết
      </Button>
      <Modal
        title="Thông tin món ăn của bạn"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="1200px"
      >
        <div className="wrapper-detail">
          <div className="detail-nameFood">
            <Image
              width={100}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <h4>Vegan Meat Sandwich</h4>
          </div>

          <div className="site-card-wrapper">
            <Row gutter={24} bordered={false}>
              <Col span={6}>
                <Card
                  title="Calories"
                  bordered={false}
                  headStyle={{
                    fontSize: 20,
                    fontWeight: 1000,
                    textAlign: "center",
                  }}
                >
                  <p className="content-card-detailFood">436</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="Crabs"
                  bordered={false}
                  headStyle={{
                    fontSize: 20,
                    fontWeight: 1000,
                    textAlign: "center",
                  }}
                >
                  <p className="content-card-detailFood"> 51 g</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="Fat"
                  headStyle={{
                    fontSize: 20,
                    fontWeight: 1000,
                    textAlign: "center",
                  }}
                  bordered={false}
                >
                  <p className="content-card-detailFood"> 11 g</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="Protein"
                  headStyle={{
                    fontSize: 20,
                    fontWeight: 1000,
                    textAlign: "center",
                  }}
                  bordered={false}
                >
                  <p className="content-card-detailFood"> 37 g</p>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div className="wrapper-detail">
          <div className="detail-nameFood">
            <Image
              width={100}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <h4>Vegan Meat Sandwich</h4>
          </div>

          <div className="site-card-wrapper">
            <Row gutter={24} bordered={false}>
              <Col span={6}>
                <Card
                  title="Calories"
                  bordered={false}
                  headStyle={{
                    fontSize: 20,
                    fontWeight: 1000,
                    textAlign: "center",
                  }}
                >
                  <p className="content-card-detailFood">436</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="Crabs"
                  bordered={false}
                  headStyle={{
                    fontSize: 20,
                    fontWeight: 1000,
                    textAlign: "center",
                  }}
                >
                  <p className="content-card-detailFood"> 51 g</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="Fat"
                  headStyle={{
                    fontSize: 20,
                    fontWeight: 1000,
                    textAlign: "center",
                  }}
                  bordered={false}
                >
                  <p className="content-card-detailFood"> 11 g</p>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="Protein"
                  headStyle={{
                    fontSize: 20,
                    fontWeight: 1000,
                    textAlign: "center",
                  }}
                  bordered={false}
                >
                  <p className="content-card-detailFood"> 37 g</p>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalDetailFood;
