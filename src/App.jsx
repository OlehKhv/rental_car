import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import FirstPage from "pages/FirstPage/FirstPage";
import SecondPage from "pages/SecondPage/SecondPage";
import HalfPage from "pages/HalfPage/HalfPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import { AppWrapper } from "./App.styled";
import HomePage from "./pages/HomePage/HomePage";

// const test = import.meta.env.VITE_API_TEST;

function App() {
    return (
        <AppWrapper>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/catalog" element={<FirstPage />} />
                    <Route path="/favorites" element={<SecondPage />}>
                        <Route path=":half" element={<HalfPage />} />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </AppWrapper>
    );
}
export default App;
