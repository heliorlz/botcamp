import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 11px 10px 16px;
  background-color: #26265e;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    border: 0 solid transparent;
    border-left-width: 100vw;
    border-top: 14px solid #26265e;
  }
`;

export default HeaderWrapper;
