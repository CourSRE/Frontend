import { Col, Progress, Row, Space, Typography } from "antd";
import React from "react";
import ReactStars from "react-stars";

type Props = {
  stars: number;
  percent: number;
};

export function StarProgress({ percent, stars }: Props) {
  return (
    <Row gutter={16} align="middle">
      <Col span={10} className="flex items-center">
        <Space align="center">
          <ReactStars
            count={5}
            value={stars}
            onChange={() => {}}
            size={20}
            color2={"#FD8E1F"}
          />
          <Typography.Text>{stars} Stars</Typography.Text>
        </Space>
      </Col>
      <Col span={14}>
        <Progress percent={percent} strokeColor="#FD8E1F" />
      </Col>
    </Row>
  );
}
