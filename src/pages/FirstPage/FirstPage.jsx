import example from "../../assets/example.png";
import { Container, StyledImage, Title } from "./FirstPage.styled";

const FirstPage = () => {
    return (
        <Container>
            <Title>First Page</Title>
            <StyledImage src={example} alt="Example" />
        </Container>
    );
};

export default FirstPage;
