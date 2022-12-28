import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../../styles/Navigator/Navigator.css';
import styled from "styled-components";
import { BiHomeAlt, BiSearch, BiShoppingBag, BiUser } from 'react-icons/bi';

const NavCenter = styled.div`
  text-align: center;
  padding-top: 5.625rem;
`;

// 새로고침하지 않아도 검색 아이콘 누르면 바로 다시 검색&카테고리 고를 수 있도록 CategoryNSearch에서 mode를 searchMode이름으로 받아옴
function NavigatorMain({ searchMode, setSearchMode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname;


  // 센터 로그인 후 센터 디테일 들어갈 때는 네비게이션바 안 띄우기 위해서 if문 추가
  return (
    <NavCenter>
      <div className="Navigator_bar">
        <BiHomeAlt
          onClick={() => {
            navigate("/");
          }}
          className={
            url === '/' ?
              'Navigator_imageSelect'
              :
              'Navigator_image'
          }
        />
        <BiSearch
          className={
            url === '/search' ?
              'Navigator_imageSelect'
              :
              'Navigator_image'
          }
          onClick={() => {
            navigate("/search");
          }}
        />
        <BiShoppingBag
          className={
            url === '/mypage' ?
              'Navigator_imageSelect'
              :
              'Navigator_image'
          }
          onClick={() => {
            navigate("/mypage");
          }}
        />
        <BiUser
          className={
            url === '/wish' ?
              'Navigator_imageSelect'
              :
              'Navigator_image'
          }
          onClick={() => {
            navigate("/wish");
          }}
        />
      </div>
    </NavCenter>
  );
}

export default NavigatorMain;
