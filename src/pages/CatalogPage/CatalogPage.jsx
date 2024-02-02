import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Catalog } from "../../components/Catalog/Catalog";
import { Form } from "../../components/Form/Form";
import { SectionCatalog } from "./CatalogPage.styled";
import { fetchAllAdverts } from "../../redux/catalog/thunks";

const CatalogPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllAdverts());
    }, [dispatch]);

    return (
        <>
            <Form />
            <Catalog />
        </>
        // <SectionCatalog>

        // </SectionCatalog>
    );
};

export default CatalogPage;
