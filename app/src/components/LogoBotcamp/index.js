import styled from "styled-components";
import logoBotcampImage from "./../../img/botcamp.png";

const LogoBotcamp = styled.img.attrs({
  src: logoBotcampImage,
  alt: "Botcamp Logo"
})`
  margin-top: 120px;
  width: 248px;
  height: 39px;
`;

export default LogoBotcamp;
