import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ModalDetailFood from "../modal/ModalDetailFood";
import Button from "react-bootstrap/Button";
import { Col, Row, Slider } from "antd";

function CardGroupFood() {
  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={6}>
          <Card className="group-card-libaryPage">
            <Card.Img
              variant="top"
              src="https://c4.wallpaperflare.com/wallpaper/821/512/1017/peppers-olives-cheese-onions-wallpaper-preview.jpg"
            />
            <Card.Body>
              <Card.Title>Tên món ăn</Card.Title>
              <Card.Text>230 Calo trên mỗi 100g</Card.Text>
            </Card.Body>
            <Button variant="warning" href="/detailfood">
              Thông tin thêm
            </Button>
            {/* <ModalDetailFood></ModalDetailFood> */}
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CardGroupFood;