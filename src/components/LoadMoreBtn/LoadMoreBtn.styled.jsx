import styled from "styled-components";

export const LoadMoreButton = styled.button`
    display: flex;
    margin: 0 auto;
    padding: 8px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    color: #3470ff;
    background-color: transparent;
    &:is(:hover, :focus) {
        color: #0b44cd;
    }
`;
