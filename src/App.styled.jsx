import styled from "styled-components";
import bg from "./assets/images/background.webp";
import "normalize.css";

export const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
`;
