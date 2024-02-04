import { Modal } from "../../Modal/Modal";
import { OptionsText, Span } from "../../Modal/Modal.styled";
import {
    AddFavoriteBtn,
    AddFavoriteBtnIcon,
    CardImg,
    CardLargeText,
    CardLargeTextContainer,
    CardLargeTextSpan,
    CatalogCard,
    LearnMoreButton,
    LearnMoreSpan,
    RemoveFavoriteBtn,
    RemoveFavoriteBtnIcon,
} from "./Card.styled";

import { useState } from "react";
import sprite from "../../../assets/images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
    addToFavorites,
    removeFromFavorites,
} from "../../../redux/favorites/slice";
import { selectFavorites } from "../../../redux/favorites/selectors";

export const Card = ({ advert }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);

    const [isShowModal, setIsShowModal] = useState(false);
    const [isShowFavoriteBtn, setIsShowFavoriteBtn] = useState(() => {
        if (favorites.find((element) => element.id === advert.id)) return true;
        return false;
    });

    const price = advert.rentalPrice.slice(1, advert.rentalPrice.length);
    const address = advert.address.split(",");
    const toggleModal = () => {
        setIsShowModal((prev) => !prev);
    };

    const addToFavorite = () => {
        dispatch(addToFavorites(advert));
        setIsShowFavoriteBtn(true);
    };

    const removeFromFavorite = () => {
        dispatch(removeFromFavorites(advert.id));
        setIsShowFavoriteBtn(false);
    };

    return (
        <>
            <CatalogCard>
                <CardImg
                    style={{
                        backgroundImage: `linear-gradient(180deg, #121417 0%, rgba(18, 20, 23, 0) 100%), url(${advert.img})`,
                    }}
                />
                <CardLargeTextContainer>
                    <CardLargeText>
                        {advert.make}{" "}
                        <CardLargeTextSpan>{advert.model}</CardLargeTextSpan>,{" "}
                        {advert.year}
                    </CardLargeText>
                    <CardLargeText>{price}$</CardLargeText>
                </CardLargeTextContainer>
                <OptionsText>
                    {address[1]}
                    <Span>|</Span>
                    {address[2]}
                    <Span>|</Span>
                    {advert.rentalCompany}
                    <Span>|</Span>
                    {advert.type}
                    <Span>|</Span>
                    {advert.model}
                    <Span>|</Span>
                    {advert.id}
                    <Span>|</Span>
                    {advert.functionalities[0]}
                </OptionsText>
                <LearnMoreButton onClick={toggleModal}>
                    <LearnMoreSpan>Learn more</LearnMoreSpan>
                </LearnMoreButton>
                {isShowFavoriteBtn ? (
                    <RemoveFavoriteBtn onClick={removeFromFavorite}>
                        <RemoveFavoriteBtnIcon>
                            <use href={sprite + "#icon-heart"}></use>
                        </RemoveFavoriteBtnIcon>
                    </RemoveFavoriteBtn>
                ) : (
                    <AddFavoriteBtn onClick={addToFavorite}>
                        <AddFavoriteBtnIcon>
                            <use href={sprite + "#icon-heart"}></use>
                        </AddFavoriteBtnIcon>
                    </AddFavoriteBtn>
                )}
            </CatalogCard>
            {isShowModal && <Modal advert={advert} toggleModal={toggleModal} />}
        </>
    );
};
