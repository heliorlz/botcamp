import styled from "styled-components";
import logoBotcampImage from "./../../img/botcamp.png";

const LogoBotcamp = styled.img.attrs({
  src: logoBotcampImage,
  alt: "Botcamp Logo"
})`
  width: ${props => (props.small ? "200px" : "248px")};
`;

export default LogoBotcamp;
