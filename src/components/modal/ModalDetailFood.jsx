import React, { useState } from "react";
import { Button, Modal } from "antd";
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
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-detail-food"
      >
        <div className="wrapper-detail">
          <div className="detail-nameFood">Vegan Meat Sandwich</div>
          <div className="wrapper-detail-content">
            <div className="detail-img">
              <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
            <div className="detail-content-wrapper">
              <div className="detail-content">
                <div className="detail-name-content">
                  <p>Calories</p>
                </div>
                <div className="detail-about-content">
                  <p>436</p>
                </div>
              </div>
              <div className="detail-content">
                <div className="detail-name-content">
                  <p>Crabs</p>
                </div>
                <div className="detail-about-content">
                  <p>51 g</p>
                </div>
              </div>
              <div className="detail-content">
                <div className="detail-name-content">
                  <p>Fat</p>
                </div>
                <div className="detail-about-content">
                  <p>11 g</p>
                </div>
              </div>
              <div className="detail-content">
                <div className="detail-name-content">
                  <p>Protein</p>
                </div>
                <div className="detail-about-content">
                  <p>37 g</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalDetailFood;
