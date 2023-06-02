import React from "react";
import { Row, Col } from "antd";

import "./styles.css";
import { AddTodoForm } from "../../component/AddTodoForm/AddTodoForm";
import { MainMenu } from "../../component/Menu/Menu";
import { ModalBox } from "../../component/Modal/Modal";
import { Router } from "../../component/Router";

interface ITodosContainerProps {}

export const TodosContainer: React.FunctionComponent<
  ITodosContainerProps
> = () => {
  return (
    <>
      <Row
        justify="center"
        align="middle"
        gutter={[0, 20]}
        className="todos-container"
      >
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <ModalBox>
            <AddTodoForm />
          </ModalBox>
        </Col>
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Router />
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={[0, 20]}
        className="todos-menu"
      >
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <MainMenu />
        </Col>
      </Row>
    </>
  );
};
