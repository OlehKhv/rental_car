import { useSelector } from "react-redux";
import { Card } from "./Card/Card";
import { CatalogCards, LoadMoreButton } from "./Catalog.styled";
import { selectAdverts } from "../../redux/catalog/selectors";

export const Catalog = () => {
    const adverts = useSelector(selectAdverts);

    return (
        <>
            <CatalogCards>
                {adverts.map((advert) => {
                    return <Card key={advert.id} item={advert} />;
                })}
            </CatalogCards>
            <LoadMoreButton>Load more</LoadMoreButton>
        </>
    );
};
