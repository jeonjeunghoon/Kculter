import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <SNavBar>
      <SListWrapper>
        <SListItems>
          <SListAnchor to="/">메인</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/manager/kpop">Kpop</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/manager/culture">문화체험</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/manager/concert">콘서트</SListAnchor>
        </SListItems>
        <SListItems>
          <SListAnchor to="/manager/pin">핀</SListAnchor>
        </SListItems>            
      </SListWrapper>
    </SNavBar>
  );
}

const SNavBar = styled.ul`
  background-color: white;
  padding: 20px;
`;

const SListWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

const SListItems = styled.li`
  list-style: none;
  padding-right: 15px;
`;

const SListAnchor = styled(Link)`
  text-decoration: none;
  color: black;
`;
