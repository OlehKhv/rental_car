import {
    CloseBtn,
    CloseBtnIcon,
    ConditionsSpan,
    ConditionsText,
    DescriptionText,
    DescriptionTitle,
    LineIconWrapper,
    ModalImg,
    ModalLargeText,
    ModalLargeTextSpan,
    OptionsMiddle,
    OptionsText,
    OptionsTop,
    Overlay,
    Popup,
    RentalCarLink,
} from "./Modal.styled";
import { useEffect } from "react";
import sprite from "../../assets/images/sprite.svg";
import { LearnMoreSpan } from "../Catalog/Card/Card.styled";

export const Modal = ({ advert, toggleModal }) => {
    const onClick = (e) => {
        e.stopPropagation();
    };

    const conditions = advert.rentalConditions.split("\n");
    const conditionsAgeDescr = conditions[0].slice(0, -2);
    const conditionsMinimumAge = conditions[0].slice(-2, conditions[0].length);
    const address = advert.address.split(",");
    const price = advert.rentalPrice.slice(1, advert.rentalPrice.length);
    const mileage = advert.mileage.toLocaleString("en-IN");

    useEffect(() => {
        const handlePressEsc = () => {
            toggleModal();
        };
        document.addEventListener("keydown", handlePressEsc);
        return () => {
            document.removeEventListener("keydown", handlePressEsc);
        };
    }, [toggleModal]);

    return (
        <Overlay onClick={toggleModal}>
            <Popup onClick={onClick}>
                <div onClick={onClick}>
                    <CloseBtn onClick={toggleModal}>
                        <CloseBtnIcon>
                            <use href={sprite + "#icon-close"}></use>
                        </CloseBtnIcon>
                    </CloseBtn>
                    <ModalImg src={advert.img} />
                    <ModalLargeText>
                        {advert.make}{" "}
                        <ModalLargeTextSpan>{advert.model}</ModalLargeTextSpan>,{" "}
                        {advert.year}
                    </ModalLargeText>
                    <OptionsTop>
                        <OptionsText>
                            {address[1]}
                            <LineIconWrapper>
                                <use href={`${sprite}#icon-line`} />
                            </LineIconWrapper>
                            {address[2]}
                            <LineIconWrapper>
                                <use href={`${sprite}#icon-line`} />
                            </LineIconWrapper>
                            Id: {advert.id}
                            <LineIconWrapper>
                                <use href={`${sprite}#icon-line`} />
                            </LineIconWrapper>
                            Year: {advert.year}
                            <LineIconWrapper>
                                <use href={`${sprite}#icon-line`} />
                            </LineIconWrapper>
                            Type: {advert.type}
                        </OptionsText>
                        <OptionsText>
                            Fuel Consumption: {advert.fuelConsumption}
                            <LineIconWrapper>
                                <use href={`${sprite}#icon-line`} />
                            </LineIconWrapper>
                            Engine Size: {advert.engineSize}
                        </OptionsText>
                    </OptionsTop>
                    <DescriptionText>{advert.description}</DescriptionText>
                    <OptionsMiddle>
                        <DescriptionTitle>
                            Accessories and functionalities:
                        </DescriptionTitle>
                        <OptionsText>
                            {advert.accessories[0]}
                            <LineIconWrapper>
                                <use href={`${sprite}#icon-line`} />
                            </LineIconWrapper>
                            {advert.accessories[1]}
                            <LineIconWrapper>
                                <use href={`${sprite}#icon-line`} />
                            </LineIconWrapper>
                            {advert.accessories[2]}
                        </OptionsText>
                        <OptionsText>
                            {advert.functionalities[0]}
                            <LineIconWrapper>
                                <use href={`${sprite}#icon-line`} />
                            </LineIconWrapper>
                            {advert.functionalities[1]}
                            <LineIconWrapper>
                                <use href={`${sprite}#icon-line`} />
                            </LineIconWrapper>
                            {advert.functionalities[2]}
                        </OptionsText>
                    </OptionsMiddle>
                    <OptionsMiddle>
                        <DescriptionTitle>Rental Conditions:</DescriptionTitle>
                        <div>
                            <ConditionsText>
                                {conditionsAgeDescr}
                                <ConditionsSpan>
                                    {conditionsMinimumAge}
                                </ConditionsSpan>
                            </ConditionsText>
                            <ConditionsText>{conditions[1]}</ConditionsText>
                        </div>
                        <div>
                            <ConditionsText>{conditions[2]}</ConditionsText>
                            <ConditionsText>
                                Mileage:{" "}
                                <ConditionsSpan>{mileage}</ConditionsSpan>
                            </ConditionsText>
                            <ConditionsText>
                                Price: <ConditionsSpan>{price}$</ConditionsSpan>
                            </ConditionsText>
                        </div>
                    </OptionsMiddle>
                    <RentalCarLink href="tel:+380730000000">
                        <LearnMoreSpan>Rental car</LearnMoreSpan>
                    </RentalCarLink>
                </div>
            </Popup>
        </Overlay>
    );
};
