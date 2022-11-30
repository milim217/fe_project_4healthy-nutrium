import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import ModalDetailFood from "../modal/ModalDetailFood";
import { Col, Row, Slider } from "antd";
function CardGroupIngredient() {
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
              <Card.Title>Tên thành phần</Card.Title>
              <Card.Text>Thông tin thành phần</Card.Text>
            </Card.Body>
            <Button variant="warning" href="/detailingredient">
              Thông tin thêm
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CardGroupIngredient;
