import React from "react";
import { Card, Space, Button, Form, Input, Row, Col, Image } from "antd";
import HeaderLayout from "../../components/header/HeaderAdmin";
import ChangePassword from "../../components/form/ChangePassword";
import UploadImageFile from "../../components/upload-image-avt/uploadImageFile";
import { Breadcrumb } from "antd";
import HeaderUserHasLog from "../../components/header/HeaderHasLog";
import Footers from "../../components/footer/footers";
import SlidebarUser from "./SlidbarUser";

const userProfile = () => {
  return (
    <div>
      <HeaderUserHasLog></HeaderUserHasLog>
      <SlidebarUser>
        <Breadcrumb
          style={{
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "10px",
          }}
        >
          <Breadcrumb.Item>
            <a href="">Trang chủ</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Hồ sơ người dùng</Breadcrumb.Item>
        </Breadcrumb>
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
          }}
        >
          <div className="site-card-wrapper">
            <Row gutter={24}>
              <Col span={12}>
                <Card
                  title="Thay đổi thông tin tài khoản"
                  size="large"
                  className="border-1 margin-20"
                >
                  <Form layout="vertical">
                    <Row gutter={24}>
                      <Col span={12}>
                        <Form.Item label="Tên của bạn">
                          <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Ngày sinh của bạn">
                          <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Giới tính">
                          <Input placeholder="input placeholder" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="Email của bạn">
                          <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Số điện thoại của bạn:">
                          <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item label="Địa chỉ của bạn:">
                          <Input placeholder="input placeholder" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                  <Button type="primary">Lưu thông tin</Button>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  title="Thông tin tài khoản"
                  bordered={false}
                  className="border-1 margin-20"
                  extra={<ChangePassword></ChangePassword>}
                >
                  <Row gutter={24}>
                    <Col span={12}>
                      <>
                        <Image
                          width={200}
                          src="https://i.pinimg.com/474x/dd/be/8b/ddbe8b9cb7292f037a8c8e8c62b74d73.jpg"
                          style={{}}
                        />
                        <div className="Upload_image___userProfile">
                          <UploadImageFile></UploadImageFile>
                        </div>
                      </>
                    </Col>

                    <Col span={12}>
                      <div className="information_user__UserProfile">
                        <Row gutter={24}>
                          <Col span={12}>
                            {" "}
                            <div className="informatione_user_cover__UserProfile">
                              Tên của bạn:
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Ngày sinh:
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Giới tính:
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Địa chỉ:
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Số điện thoại:
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Công việc:
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Chiều cao:
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Cân nặng:
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Tần số tập luyện:
                            </div>
                          </Col>
                          <Col span={12}>
                            <div className="informatione_user_cover__UserProfile">
                              "Your Name"
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              "DD/MM/YYYY"<br></br>
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              "Custom"<br></br>
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              "abc, street"
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              0123.xx.xx.xx9
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Công việc:
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Chiều cao:
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Cân nặng:
                            </div>
                            <div className="informatione_user_cover__UserProfile">
                              Tần số tập luyện:
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </Space>
      </SlidebarUser>
      <Footers></Footers>
    </div>
  );
};

export default userProfile;
