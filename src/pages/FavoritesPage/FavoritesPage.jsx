import { FavoritesList } from "../../components/FavoritesList/FavoritesList";
import { SectionCatalog } from "../CatalogPage/CatalogPage.styled";

const FavoritesPage = () => {
    return (
        <SectionCatalog>
            <FavoritesList />
        </SectionCatalog>
    );
};

export default FavoritesPage;
