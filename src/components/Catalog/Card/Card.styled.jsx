import styled from "styled-components";

export const CatalogCard = styled.div`
    width: 274px;
    height: 450px;
    border-radius: 14px 14px 12px 12px;
    position: relative;
`;

export const LearnMoreButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: none;
    width: 274px;
    height: 44px;
    background-color: #3470ff;
    margin-top: 24px;
    position: absolute;
    bottom: 0;
    &:is(:hover, :focus) {
        background-color: #0b44cd;
    }
`;

export const LearnMoreSpan = styled.span`
    font-weight: 600;
    font-size: 14px;
    line-height: 1.42857;
    color: #fff;
`;

export const CardImg = styled.div`
    width: 274px;
    height: 268px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 14px;
    margin-bottom: 14px;
`;

export const CardLargeTextContainer = styled("div")`
    display: flex;
    justify-content: space-between;
`;

export const CardLargeText = styled("p")`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
    margin-bottom: 8px;
`;

export const CardLargeTextSpan = styled("span")`
    color: #3470ff;
`;

export const AddFavoriteBtn = styled("button")`
    padding: 0;
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`;

export const AddFavoriteBtnIcon = styled("svg")`
    stroke: rgba(255, 255, 255, 0.8);
    fill: transparent;
    width: 18px;
    height: 18px;
    &:is(:hover, :focus) {
        stroke: #3470ff;
        fill: #3470ff;
    }
`;

export const RemoveFavoriteBtn = styled("button")`
    padding: 0;
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
`;

export const RemoveFavoriteBtnIcon = styled("svg")`
    stroke: #3470ff;
    fill: #3470ff;
    width: 18px;
    height: 18px;
    &:is(:hover, :focus) {
        stroke: rgba(255, 255, 255, 0.8);
        fill: transparent;
    }
`;
