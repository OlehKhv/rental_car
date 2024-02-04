import { Modal } from "../../Modal/Modal";
import { LineIconWrapper, OptionsText } from "../../Modal/Modal.styled";
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
    const img = advert.img ? advert.img : advert.photoLink;

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
                        backgroundImage: `url(${img})`,
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
                    <LineIconWrapper>
                        <use href={`${sprite}#icon-line`} />
                    </LineIconWrapper>
                    {address[2]}
                    <LineIconWrapper>
                        <use href={`${sprite}#icon-line`} />
                    </LineIconWrapper>
                    {advert.rentalCompany}
                    <LineIconWrapper>
                        <use href={`${sprite}#icon-line`} />
                    </LineIconWrapper>
                    {advert.type}
                    <LineIconWrapper>
                        {advert.model}
                        <use href={`${sprite}#icon-line`} />
                        {advert.id}
                    </LineIconWrapper>
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
