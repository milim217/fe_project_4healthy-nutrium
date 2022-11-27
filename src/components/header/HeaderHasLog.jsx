import React from "react";
import "../../assets/style/user/header_footer.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const HeaderUser = () => {
  return (
    <>
      <div className="header-wrapper">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="wrapper-navbar-header"
        >
          <Container>
            <Navbar.Brand href="#home">
              <div className="custom-navbar">
                <div className="container">
                  <div className="navbar-header">
                    <button className="navbar-toggle"></button>
                    <div href="/home" className="navbar-brand">
                      4Healthy <span>.</span> Nutrion
                    </div>
                  </div>
                </div>
              </div>
            </Navbar.Brand>
            <div className="main-nav-link-btnLogin-btnSignin">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Link to={"/homeuser"}>
                    <Nav.Link href="#features" className="text-nav-link">
                      Trang chủ
                    </Nav.Link>
                  </Link>
                  <Nav.Link href="#pricing" className="text-nav-link">
                    Thư viện
                  </Nav.Link>
                  <Nav.Link href="/schedule" className="text-nav-link">
                    Kế hoạch ăn uống của bạn
                  </Nav.Link>
                  <Nav.Link href="#pricing" className="text-nav-link">
                    Bài tập thể thao dành cho bạn
                  </Nav.Link>
                </Nav>
                <Nav>
                  <NavDropdown
                    title="NameUser"
                    id="basic-nav-dropdown"
                    className="text-nav-link"
                  >
                    <Link to={"/homeuser/profile"}>
                      <NavDropdown.Item href="#action/3.1">
                        Thông tin tài khoản
                      </NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to={"/home"}>
                      <NavDropdown.Item href="#action/3.2">
                        Đăng xuất
                      </NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default HeaderUser;
