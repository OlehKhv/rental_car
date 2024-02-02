import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Footer } from "../Footer/Footer";
import { Container } from "./SharedLayout.styled";

const SharedLayout = () => {
    return (
        <Container>
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Footer />
        </Container>
    );
};

export default SharedLayout;
