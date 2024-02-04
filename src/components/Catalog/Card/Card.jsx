// import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../Modal/Modal";
import {
    CardImg,
    CatalogCard,
    LearnMoreButton,
    LearnMoreSpan,
} from "./Card.styled";

import { useState } from "react";

export const Card = ({ advert }) => {
    const [isShowModal, setIsShowModal] = useState(false);
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
    } = advert;

    const toggleModal = () => {
        setIsShowModal((prev) => !prev);
    };

    return (
        <>
            <CatalogCard>
                <CardImg src={img} />
                <h2>Buick Enclave, 2008 $40</h2>
                <p>Subscription|Subscription</p>
                <LearnMoreButton onClick={toggleModal}>
                    <LearnMoreSpan>Learn more</LearnMoreSpan>
                </LearnMoreButton>
            </CatalogCard>
            {isShowModal && <Modal advert={advert} toggleModal={toggleModal} />}
        </>
    );
};
