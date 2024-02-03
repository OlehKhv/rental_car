import { useSelector } from "react-redux";
import {
    CardImg,
    CatalogCard,
    LearnMoreButton,
    LearnMoreSpan,
} from "./Card.styled";
import { selectAdverts } from "../../../redux/catalog/selectors";

export const Card = ({ item }) => {
    const {
        id,
        year,
        make,
        model,
        type,
        img,
        rentalPrice,
        rentalCompany,
        address,
    } = item;

    return (
        <CatalogCard>
            <CardImg src={img} />
            <h2>Buick Enclave, 2008 $40</h2>
            <p>Subscription|Subscription</p>
            <LearnMoreButton>
                <LearnMoreSpan>Learn more</LearnMoreSpan>
            </LearnMoreButton>
        </CatalogCard>
    );
};
