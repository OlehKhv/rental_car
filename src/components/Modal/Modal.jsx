import {
    CloseBtn,
    CloseBtnIcon,
    ConditionsSpan,
    ConditionsText,
    DescriptionText,
    DescriptionTitle,
    ModalImg,
    ModalLargeText,
    ModalLargeTextSpan,
    OptionsMiddle,
    OptionsText,
    OptionsTop,
    Overlay,
    Popup,
    RentalCarLink,
    Span,
} from "./Modal.styled";
import { useEffect } from "react";
import sprite from "../../assets/images/sprite.svg";
import { LearnMoreSpan } from "../Catalog/Card/Card.styled";

export const Modal = ({ advert, toggleModal }) => {
    const onClick = (e) => {
        e.stopPropagation();
    };

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
                            <Span>|</Span>
                            {address[2]}
                            <Span>|</Span>Id: {advert.id}
                            <Span>|</Span>Year: {advert.year}
                            <Span>|</Span>Type: {advert.type}
                        </OptionsText>
                        <OptionsText>
                            Fuel Consumption: {advert.fuelConsumption}
                            <Span>|</Span>Engine Size: {advert.engineSize}
                        </OptionsText>
                    </OptionsTop>
                    <DescriptionText>{advert.description}</DescriptionText>
                    <OptionsMiddle>
                        <DescriptionTitle>
                            Accessories and functionalities:
                        </DescriptionTitle>
                        <OptionsText>
                            {advert.accessories[0]}
                            <Span>|</Span>
                            {advert.accessories[1]}
                            <Span>|</Span>
                            {advert.accessories[2]}
                        </OptionsText>
                        <OptionsText>
                            {advert.functionalities[0]}
                            <Span>|</Span>
                            {advert.functionalities[1]}
                            <Span>|</Span>
                            {advert.functionalities[2]}
                        </OptionsText>
                    </OptionsMiddle>
                    <OptionsMiddle>
                        <DescriptionTitle>Rental Conditions:</DescriptionTitle>
                        <div>
                            <ConditionsText>
                                Minimum age :{" "}
                                <ConditionsSpan>25</ConditionsSpan>
                            </ConditionsText>
                            <ConditionsText>
                                Valid driver’s license
                            </ConditionsText>
                        </div>
                        <div>
                            <ConditionsText>
                                Security deposite required
                            </ConditionsText>
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
