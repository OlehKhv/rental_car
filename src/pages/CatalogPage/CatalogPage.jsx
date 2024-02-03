import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Catalog } from "../../components/Catalog/Catalog";
import { Form } from "../../components/Form/Form";
import { SectionCatalog } from "./CatalogPage.styled";
import { fetchAllAdverts } from "../../redux/catalog/thunks";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";

const CatalogPage = () => {
    const dispatch = useDispatch();
    const params = { page: 1, limit: 10 };

    useEffect(() => {
        dispatch(fetchAllAdverts(params));
    }, [dispatch, params]);

    return (
        <SectionCatalog>
            <Form />
            <Catalog />
            <LoadMoreBtn />
        </SectionCatalog>
    );
};

export default CatalogPage;
