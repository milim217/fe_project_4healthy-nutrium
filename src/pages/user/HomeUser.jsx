import React from "react";
import { Layout, Card, Col, Row, Carousel } from "antd";
import Footers from "../../components/footer/footers";
import "../../assets/style/user/homepage.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import HeaderHasLog from "../../components/header/HeaderHasLog";
const { Header, Footer, Content } = Layout;
const gridStyle = {
  width: "20%",
  textAlign: "center",
};
const HomeUser = () => (
  <>
    <HeaderHasLog></HeaderHasLog>
    <Layout>
      <Content className="wrapper-cover">
        <div className="wrapper-homeuser">
          <Card
            type="inner"
            title="Tóm tắt hàng ngày của bạn"
            extra={
              // <ButtonGroup aria-label="Basic example">
              //   <Button variant="primary">Thay đổi thông tin</Button>
              <Link to={"/onboarding/summaryInfo"}>
                <Button variant="secondary"> Nhận chế độ ăn của bạn</Button>
              </Link>
              // </ButtonGroup>
            }
          >
            <Card>
              <Card.Grid style={gridStyle}>
                Tuổi của bạn
                <p>
                  <b style={{ color: "#ff8000", fontSize: "30px" }}>20</b> tuổi
                </p>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                Cân nặng của bạn
                <p>
                  <b style={{ color: "#ff8000", fontSize: "30px" }}>77</b>
                  (kg)
                </p>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                Chiều cao của bạn
                <p>
                  <b style={{ color: "#ff8000", fontSize: "30px" }}>175</b> (cm)
                </p>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                BMI của bạn
                <p>
                  <b style={{ color: "#ff8000", fontSize: "25px" }}>70</b>
                </p>
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                Lượng calo cần tiêu thụ trên ngày
                <p>
                  <b style={{ color: "#ff8000", fontSize: "30px" }}>
                    1500 - 1600
                  </b>{" "}
                  Cal
                </p>
              </Card.Grid>
            </Card>
          </Card>
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Khuyến cáo về lượng vitamin và khoáng chất mỗi ngày"
          >
            <Table
              striped
              bordered
              hover
              className="table_recomendation_wrapper"
            >
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Nhóm tuổi</th>
                  <th>Giới tính</th>
                  <th>A(mvg)</th>
                  <th>D(mcg)</th>
                  <th>E(mg)</th>
                  <th>K(mcg)</th>
                  <th>C(mg)</th>
                  <th>B1(mg)</th>
                  <th>B2(mg)</th>
                  <th>B3(mg NE)</th>
                  <th>B6(mg)</th>
                  <th>B9(mcg)</th>
                  <th>B12(mcg)</th>
                  <th>Canxi(mg)</th>
                  <th>Iot(mcg)</th>
                  <th>Sắt(mg)</th>
                  <th>Kẽm(mg)</th>
                  <th>Magie(mg)</th>
                  <th>Photpho(mg)</th>
                </tr>
                <tr>
                  <th>#</th>
                  <td>Dưới 10 tháng</td>
                  <td>Nam giới</td>
                  <td>375</td>
                  <td>5</td>
                  <td>3</td>
                  <td>6</td>
                  <td>25</td>
                  <td>0.2</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>
      </Content>
      <Footer className="footer">
        <Footers></Footers>
      </Footer>
    </Layout>
  </>
);
export default HomeUser;
