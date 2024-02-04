import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Catalog } from "../../components/Catalog/Catalog";
import { Form } from "../../components/Form/Form";
import { SectionCatalog } from "./CatalogPage.styled";
import {
    getAdverts,
    getAllAdverts,
    getMakesList,
} from "../../redux/catalog/thunks";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";
import {
    selectLimit,
    selectPage,
    selectTotalPages,
} from "../../redux/catalog/selectors";
import { setPage } from "../../redux/catalog/slice";

const CatalogPage = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const limit = useSelector(selectLimit);
    const pages = useSelector(selectTotalPages);

    useEffect(() => {
        dispatch(setPage(1));
        dispatch(getAllAdverts());
        dispatch(getMakesList());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAdverts({ page, limit }));
    }, [dispatch, limit, page]);

    const handleGetMoreAdverts = () => {
        dispatch(setPage(page + 1));
    };

    const isShowBtn = page < pages;

    return (
        <SectionCatalog>
            <Form />
            <Catalog />
            {isShowBtn && <LoadMoreBtn onClick={handleGetMoreAdverts} />}
        </SectionCatalog>
    );
};

export default CatalogPage;
