import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  box-sizing: border-box;
  padding: 10px 16px;
  background-color: transparent;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100%;
    background-color: #26265e;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    transform-origin: bottom right;
    transform: skewY(2deg);
  }
`;

export default HeaderWrapper;
