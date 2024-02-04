import { useSelector } from "react-redux";
import { Card } from "./Card/Card";
import { CardsList } from "./Catalog.styled";
import { selectAdverts } from "../../redux/catalog/selectors";

export const Catalog = () => {
    const adverts = useSelector(selectAdverts);

    return (
        <CardsList>
            {adverts.map((advert) => {
                return <Card key={advert.id} advert={advert} />;
            })}
        </CardsList>
    );
};
