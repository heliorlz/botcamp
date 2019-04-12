import styled from "styled-components";

const UserMessageWrapper = styled.div`
  align-self: flex-end;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    border-left: 0px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 10px solid #ed5a48;
    transform: rotate(90deg) translate(5px, 3px);
    right: -10px;
    top: 0;
  }
`;

export default UserMessageWrapper;
