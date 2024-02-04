import { styled } from "styled-components";

export const Overlay = styled("div")`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(18, 20, 23, 0.5);
    z-index: 1200;
    overflow: hidden;
`;

export const Popup = styled("div")`
    position: relative;
    padding: 40px;
    border-radius: 24px;
    width: 541px;
    background-color: #fff;
`;

export const CloseBtn = styled("button")`
    padding: 0;
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`;

export const CloseBtnIcon = styled("svg")`
    stroke: #121417;
    width: 24px;
    height: 24px;
`;

export const ModalImg = styled("img")`
    border-radius: 14px;
    width: 461px;
    height: 248px;
    margin-bottom: 14px;
`;

export const ModalLargeText = styled("p")`
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33333;
    color: #121417;
    margin-bottom: 8px;
`;

export const ModalLargeTextSpan = styled("span")`
    color: #3470ff;
`;

export const Span = styled("span")`
    margin-left: 6px;
    margin-right: 6px;
    color: rgba(18, 20, 23, 0.1);
`;

export const OptionsTop = styled("div")`
    margin-bottom: 14px;
`;

export const OptionsText = styled("p")`
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
    margin-bottom: 4px;
`;

export const DescriptionText = styled("p")`
    font-size: 14px;
    line-height: 1.42857;
    color: #121417;
    margin-bottom: 24px;
`;

export const DescriptionTitle = styled("p")`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.42857;
    color: #121417;
    margin-bottom: 8px;
`;

export const OptionsMiddle = styled("div")`
    margin-bottom: 24px;
`;

export const ConditionsText = styled("p")`
    display: inline-block;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;
    background-color: #f9f9f9;
    border-radius: 35px;
    padding: 7px 14px;
    margin-right: 8px;
    margin-bottom: 8px;
`;

export const ConditionsSpan = styled("span")`
    font-weight: 600;
    color: #3470ff;
`;

export const RentalCarLink = styled("a")`
    border-radius: 12px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;
    background-color: #3470ff;
`;
