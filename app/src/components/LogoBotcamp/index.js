import styled from "styled-components";
import logoBotcampImage from "./../../img/botcamp.png";

const LogoBotcamp = styled.img.attrs({
  src: logoBotcampImage,
  alt: "Botcamp Logo"
})`
  width: ${props => (props.small ? "200px" : "248px")};
  margin-bottom: ${props => (props.small ? "12px" : "0")};
`;

export default LogoBotcamp;
