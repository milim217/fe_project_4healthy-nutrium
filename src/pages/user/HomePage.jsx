import React from "react";
import { Layout, Card, Col, Row } from "antd";
import "../../assets/style/user/homepage.css";
const { Header, Footer, Content } = Layout;

const HomePage = () => (
  <>
    <Layout>
      <Header>Header</Header>
      <Content>
        <div className="wrapper">
          <div className="site-card-wrapper">
            <Row gutter={24}>
              <Col span={6}>
                <Card
                  title="Card title"
                  bordered={false}
                  hoverable
                  cover={
                    <img
                      alt="example"
                      style={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRf3nSwV3O5u1xavI9re84eA-3njx3gZCOArbJrFU-W2DQMYoHt1UjrOR_T424qL9IWZw&usqp=CAU"
                    />
                  }
                >
                  Card content
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="Card title"
                  bordered={false}
                  hoverable
                  cover={
                    <img
                      alt="example"
                      style={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRf3nSwV3O5u1xavI9re84eA-3njx3gZCOArbJrFU-W2DQMYoHt1UjrOR_T424qL9IWZw&usqp=CAU"
                    />
                  }
                >
                  Card content
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="Card title"
                  bordered={false}
                  hoverable
                  cover={
                    <img
                      style={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                      }}
                      alt="example"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRf3nSwV3O5u1xavI9re84eA-3njx3gZCOArbJrFU-W2DQMYoHt1UjrOR_T424qL9IWZw&usqp=CAU"
                    />
                  }
                >
                  Card content
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="Card title"
                  bordered={false}
                  hoverable
                  cover={
                    <img
                      style={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                      }}
                      alt="example"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRf3nSwV3O5u1xavI9re84eA-3njx3gZCOArbJrFU-W2DQMYoHt1UjrOR_T424qL9IWZw&usqp=CAU"
                    />
                  }
                >
                  Card content
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  title="Card title"
                  bordered={false}
                  hoverable
                  cover={
                    <img
                      style={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                      }}
                      alt="example"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRf3nSwV3O5u1xavI9re84eA-3njx3gZCOArbJrFU-W2DQMYoHt1UjrOR_T424qL9IWZw&usqp=CAU"
                    />
                  }
                >
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
);
export default HomePage;
