import React from "react";
import styled from "styled-components";

const Course = props => (
  <Container>
    <Content>
      <Avatar source={props.avatar} />
      <Caption>{props.caption}</Caption>
      <Author2>{props.author2}</Author2>
      <Author3>{props.author3}</Author3>
      <Author>{props.author}</Author>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View`
  width: 335px;
  height: 120px;
  background: white;
  margin: 10px 20px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
  padding-left: 75px;
  justify-content: center;
  height: 120px;
`;

const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  position: absolute;
  top: 38px;
  left: 15px;
  border-radius: 23px;
`;

const Caption = styled.Text`
  font-size: 16px;
  color: #3c4560;
  font-weight: bold;
`;

const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;
const Author2 = styled.Text`
  font-size: 13px;
  color: #3c4560;
  font-weight: 500;
  margin-top: 4px;
`;
const Author3 = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;
