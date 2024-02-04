import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { CardsList } from "../Catalog/Catalog.styled";
import { Card } from "../Catalog/Card/Card";
import { Notification } from "./NotificationNotFavorites";

export const FavoritesList = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <>
            {favorites.length > 0 ? (
                <CardsList>
                    {favorites.map((advert) => {
                        return <Card key={advert.id} advert={advert} />;
                    })}
                </CardsList>
            ) : (
                <Notification message="Your favorites list is empty!" />
            )}
        </>
    );
};
