import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;


const DivLogo = styled.div`
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
`;

const HeaderMovie = () => {
  const { pathname } = useLocation();
  return(
    <Header>
      <DivLogo />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="/search">
          <Link to="/search">Search</Link>
        </Menu.Item>
        <Menu.Item key="/popular-movie">
          <Link to="/popular-movie">Popular movie</Link>
        </Menu.Item>
        <Menu.Item key="/up-coming">Upcoming</Menu.Item>
        <Menu.Item key="/login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}
export default React.memo(HeaderMovie);