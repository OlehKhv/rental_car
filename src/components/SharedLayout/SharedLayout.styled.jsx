import styled from "styled-components";
import bg from "../../assets/images/background.webp";
import "normalize.css";

export const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
    /* overflow-y: hidden; */
`;

export const Container = styled.div`
    width: 1184px;
    margin: 0 auto;
`;
