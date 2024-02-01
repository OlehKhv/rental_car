import example from "../../assets/example.png";
import { Container, StyledImage, Title } from "../FirstPage/FirstPage.styled";

const HomePage = () => {
    return (
        <Container>
            <Title>First Page</Title>
            <StyledImage src={example} alt="Example" />
        </Container>
    );
};

export default HomePage;
